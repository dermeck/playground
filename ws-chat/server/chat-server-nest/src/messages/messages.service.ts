import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [{ userName: 'Max', content: 'moep' }];

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
