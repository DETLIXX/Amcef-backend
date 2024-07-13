import { Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { HydratedDocument } from 'mongoose';
import { MemberSchema } from './Members.schema';

export type ToDoDocument = HydratedDocument<ToDo>;

export class ToDo {
  @Prop({ required: true })
  title: string;

  @Prop({ unique: true })
  uniqe: string;

  @Prop()
  description: string;

  @Prop({ default: false })
  isCompleted: boolean;

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop({ default: new Date() })
  updatedAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Members' })
  members: MemberSchema;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Members' })
  author: MemberSchema;
}

export const ToDoSchema = SchemaFactory.createForClass(ToDo);
