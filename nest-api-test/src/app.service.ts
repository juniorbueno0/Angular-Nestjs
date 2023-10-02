import { Injectable } from '@nestjs/common';
import { Message } from './interfaces/message.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
