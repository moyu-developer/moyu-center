import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

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
  readonly password: string

  @Prop({ default: '' })
  @IsString()
  @ApiProperty({ description: '用户头像' })
  readonly avatar: string

  @Prop({ required: true, default: false })
  @Exclude()
  isDelete: boolean
}

export const UserModel = SchemaFactory.createForClass(UserDto);
