import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
  
export type EmployeeDocument = Message & Document;
  
@Schema()
export class Message {
    @Prop()
    id: number;
  
    @Prop()
    content: string;
}
  
export const MessageSchema = SchemaFactory.createForClass(Message);