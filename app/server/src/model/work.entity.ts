import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import type { Document } from "mongoose";

export type WorkDto = Work & Document<string>;

@Schema({
  collection: "work",
  timestamps: true,
})
export class Work {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ default: "创建人什么都没有留下！" })
  description: string;

  constructor(partial: Partial<Work>) {
    Object.assign(this, partial);
  }
}

export const WorkModel = SchemaFactory.createForClass(Work);
