import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongoSchema } from 'mongoose';
import type { Document} from 'mongoose';

export type WorkRecordDto = WorkRecord & Document<string>

@Schema({
  collection: 'work_record',
  timestamps: true
})
export class WorkRecord {
  @Prop({
    type: MongoSchema.Types.ObjectId,
    required: true,
  })
  user_id: MongoSchema.Types.ObjectId

  @Prop({ type: MongoSchema.Types.ObjectId, required: true })
  work_id: string

  @Prop({ required: true })
  action: 1 | 2

}

export const WorkRecordModel = SchemaFactory.createForClass(WorkRecord);
