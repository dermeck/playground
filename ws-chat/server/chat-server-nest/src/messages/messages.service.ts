import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  // TODO use db
  messages: Message[] = [{ userName: 'Max', content: 'moep' }];
  clientToUser = {};

  identify(userName: string, clientId: string) {
    this.clientToUser[clientId] = userName;

    return Object.values(this.clientToUser);
  }

  getCLientByName(clientId: string) {
    return this.clientToUser[clientId];
  }

  create(createMessageDto: CreateMessageDto) {
    const message = { ...createMessageDto };
    this.messages.push(message); // TODO identify user

    return message; // returns to sender
  }

  findAll() {
    return this.messages;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    // TODO
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    // TODO
    return `This action removes a #${id} message`;
  }
}
