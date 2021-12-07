import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongoSchema } from 'mongoose';
import { IsString, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { WorkDto } from '.';

@Schema({
  collection: 'project',
})
export class ProjectDto extends Document {
  @Prop({ required: true })
  @IsString()
  @IsNotEmpty({ message: '项目名称不能为空' })
  @Length(3, 10)
  @ApiProperty({ description: '项目名称', required: true })
  readonly name: string;

  @Prop({
    default:
      'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
  })
  @IsString()
  @ApiProperty({ description: '项目logo' })
  readonly logo: string;

  @Prop()
  @IsString()
  @ApiProperty({ description: '前缀地址' })
  readonly prefix: string

  @Prop()
  @IsString()
  @ApiProperty({ description: 'Swagger地址' })
  readonly swagger: string

  @Prop({ default: '什么都没有的项目介绍' })
  @IsString()
  @Length(3, 50)
  @ApiProperty({ description: '业务线简介' })
  readonly description: string;

  @Prop({ required: true, type: MongoSchema.Types.ObjectId, ref: 'WorkDto' })
  @IsString()
  @ApiProperty({ description: '关联关系组 - 一对一关系' })
  readonly work: WorkDto;

  

  @Prop({ required: true, default: false })
  @Exclude()
  isDelete: boolean;
}

export const WorkModel = SchemaFactory.createForClass(ProjectDto);
