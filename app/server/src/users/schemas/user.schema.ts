import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    
  @Prop({ required: true })
  username: string;


  @Prop({ required: true })
  password: string;


  @Prop({ required: true })
  emali: string;


  @Prop({ required: true })
  mobile: string;
}

export const UserSchema = SchemaFactory.createForClass(User);