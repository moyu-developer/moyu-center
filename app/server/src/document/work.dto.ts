import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Document} from 'mongoose';
import {
  IsString,
  IsNotEmpty,
  Length,
  MaxLength,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export type WorkDto = Work & Document;
@Schema({
  collection: 'work',
  timestamps: true,
})
export class Work {
  @Prop({ required: true, unique: true })
  @IsOptional()
  @IsString({ message: '业务线名称只能为字符串' })
  @IsNotEmpty({ message: '业务线名称不能为空' })
  @MaxLength(10, { message: '业务线名称不能超过十个字符' })
  @ApiProperty({ description: '业务线名称', required: true })
  name: string;

  @Prop({ default: '创建人什么都没有留下！' })
  @IsString({ message: '业务线描述只能为字符串' })
  @Length(3, 50)
  @ApiProperty({ description: '业务线简介' })
  description: string;

  constructor(partial: Partial<Work>) {
    Object.assign(this, partial);
  }
}

export const WorkModel = SchemaFactory.createForClass(Work);
