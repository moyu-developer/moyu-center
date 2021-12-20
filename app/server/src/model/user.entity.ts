import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Document } from 'mongoose';

export type UserDto = User & Document<string>;

@Schema({
  collection: 'user',
  timestamps: true,
  versionKey: false,
})
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  mobile: string;

  @Prop()
  salt: string;

  @Prop()
  password: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}

export const UserModel = SchemaFactory.createForClass(User);
