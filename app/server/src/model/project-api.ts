import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Schema as MongoSchema } from 'mongoose' 
import type { Document } from "mongoose";

export type ProjectAPIDto = ProjectAPI & Document<string>;

@Schema({
  collection: "project-api",
  timestamps: true,
})
export class ProjectAPI {

  @Prop({ required: true, type: MongoSchema.Types.ObjectId})
  project_id: string

  /** @prop 标题 */
  @Prop({ required: true, unique: true })
  title: string

  /** @prop 描述 */
  @Prop()
  description?: string

  /** @prop 接口状态 */
  @Prop({ enum: [0, 1, 2], default: 0 })
  status?: 0 | 1 | 2

  @Prop({ required: true })
  path: string

  @Prop({ required: true, enum: ['POST' , 'PATCH' , 'GET' , 'POST' , 'PUT' , 'OPTIONS'] })
  method: 'POST' | 'PATCH' | 'GET' | 'POST' | 'PUT' | 'OPTIONS'

  @Prop({type: {
    path: String,
    params: [
      {
        name: String,
        value: String
      }
    ]
  }})
  query_path: {
    path: string,
    params: {
      name: string,
      description?: string
    }[]
  }


  @Prop({
    type: {
      name: String,
      value: String,
      example: String,
      desc: String,
      required: {
        type: String,
        enum: [String]
      }
    }
  })
  request_query: {
    name: string
    value: string
    example: string,
    desc: string
    require: {
      type: string,
    }
  }[]
  
}

export const WorkModel = SchemaFactory.createForClass(ProjectAPI);
