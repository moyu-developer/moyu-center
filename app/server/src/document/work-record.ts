import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import type { Document } from 'mongoose';
import { Schema as MongoSchema } from 'mongoose';
import type { UserDocument } from 'src/users/schemas/user.schema';
import type { WorkDto } from './work.dto';

export type WorkRecordDto = WorkRecord & Document

@Schema({
  collection: 'user_work_count',
  timestamps: {
    createdAt: true,
    updatedAt: true,
  },
})
export class WorkRecord {
  @Prop({
    type: MongoSchema.Types.ObjectId,
    ref: 'UserDocument',
    required: true,
  })
  @ApiProperty({description: '用户id', required: true  })
  user: UserDocument['_id'];

  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'WorkDto', required: true })
  @ApiProperty({description: '业务线id', required: true  })
  work: WorkDto['_id'];

  @Prop({ required: true })
  @ApiProperty({ description: '当前操作状态，1：创建，2:加入', enum: [1, 2] })
  @IsNumber()
  action: 1 | 2

  constructor(partial: Partial<WorkRecord>) {
    Object.assign(this, partial);
  }
}

export const WorkRecordModel = SchemaFactory.createForClass(WorkRecord);
