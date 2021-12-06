import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class UserPayload {
  name: string
  password: string
  avatar?: string
}

export type UserDocument = Document<User>

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  avatar?: string
}


export const UserSchema = SchemaFactory.createForClass(User);


export const UserORM = {
  name: 'USER',
  schema: UserSchema
}