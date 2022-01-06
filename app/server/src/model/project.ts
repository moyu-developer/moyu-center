import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import type { Document } from "mongoose";
import { Schema as MongoSchema } from 'mongoose'

export type WorkDto = Project & Document<string>;

@Schema({
  collection: "project",
  timestamps: true,
})
export class Project {

  /** @prop 业务线归属id */
  @Prop({ required: true, type: MongoSchema.Types.ObjectId})
  work_id: string

  /** @prop 项目名称 */
  @Prop({ required: true, unique: true })
  name: string;

  /** @prop 项目前戳 */
  @Prop()
  prefix?: string

  /** @prop 项目描述 */
  @Prop()
  description?: string
  
}

export const WorkModel = SchemaFactory.createForClass(Project);
