import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongoSchema } from 'mongoose';
import { IsString, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { UserDto, UserModel } from '.';

@Schema({
  collection: 'work',
})
export class WorkDto extends Document {

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty({ message: '业务线名称不能为空' })
  @Length(3, 10)
  @ApiProperty({ description: '业务线名称', required: true })
  readonly name: string;


  @Prop({ default: '创建人什么都没有留下！' })
  @IsString()
  @Length(3, 50)
  @ApiProperty({ description: '业务线简介' })
  readonly description: string;

  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'UserDto' })
  @IsString()
  @IsNotEmpty({ message: '创建用户不存在' })
  readonly user: UserDto['_id']

  @Prop({ required: true, default: false, })
  @Exclude()
  isDelete: boolean
}

export const WorkModel = SchemaFactory.createForClass(WorkDto);
