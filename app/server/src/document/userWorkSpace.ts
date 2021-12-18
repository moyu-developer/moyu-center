import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongoSchema } from 'mongoose';
import type { UserDocument } from 'src/users/schemas/user.schema';
import type { ProjectDto } from './project.dto';
import type { WorkDto } from './work.dto';

@Schema({
  collection: 'workspace',
  timestamps: true,
})
export class WorkSpace {
  @Prop({
    type: MongoSchema.Types.ObjectId,
    ref: 'UserDocument',
    required: true,
  })
  user: UserDocument['_id'];

  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'WorkDto', required: true })
  work: WorkDto['_id'];

  @Prop({
    type: MongoSchema.Types.ObjectId,
    ref: 'UserDocument',
    required: true,
  })
  project: ProjectDto['_id'];

  @Prop({ enum: [1, 2], require: true })
  type: 1 | 2;

  @Prop({ select: false, default: false })
  isDelete: boolean;

  constructor(partial: Partial<WorkSpace>) {
    Object.assign(this, partial);
  }
}

export const WorkModel = SchemaFactory.createForClass(WorkSpace);
