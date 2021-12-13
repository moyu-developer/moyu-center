import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongoSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { UserDocument } from 'src/users/schemas/user.schema'
import { ProjectDto } from './project.dto';
import { WorkDto } from './work.dto';

@Schema({
  collection: 'workspace',
  timestamps: true,
})
export class WorkSpace {

  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'UserDocument', required: true })
  user: UserDocument['_id']

  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'WorkDto', required: true })
  work: WorkDto['_id']

  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'UserDocument', required: true })
  project: ProjectDto['_id']

  @Prop({ enum: [1 , 2], require: true })
  type: 1 | 2

  @Prop({ select: false, default: false })
  isDelete: boolean

  constructor(partial: Partial<WorkSpace>) {
    Object.assign(this, partial);
  }
}

export const WorkModel = SchemaFactory.createForClass(WorkSpace);