import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Schema({
  collection: 'user',
})
export class UserDto extends Document {
  @Prop({ required: true })
  @IsString()
  @IsNotEmpty({ message: '用户名称不能为空' })
  @ApiProperty({ description: '用户名称', required: true })
  readonly name: string;

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty({ message: '用户密码不能为空' })
  @ApiProperty({ description: '用户密码', required: true })
  readonly password: string;
}

export const UserModel = SchemaFactory.createForClass(UserDto);
