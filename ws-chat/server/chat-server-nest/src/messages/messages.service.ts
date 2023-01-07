import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessagesService {
  create(createMessageDto: CreateMessageDto) {
    // TODO
    return 'This action adds a new message';
  }

  findAll() {
    // TODO
    return `This action returns all messages`;
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
