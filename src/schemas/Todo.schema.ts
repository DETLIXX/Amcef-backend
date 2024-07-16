import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Member } from './Members.schema';

export type ToDoDocument = HydratedDocument<ToDo>;

@Schema()
class UpdateHistory {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Members' })
  updatedBy: Member;

  @Prop({ default: new Date() })
  updatedAt: Date;
}

const UpdateHistorySchema = SchemaFactory.createForClass(UpdateHistory);

@Schema()
export class ToDo {
  @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: false })
  isCompleted: boolean;

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop({ type: [UpdateHistorySchema], default: [] })
  updateHistory: UpdateHistory[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Members' })
  author: Member;

  @Prop({ default: 'todo' })
  status: string;

  @Prop()
  deadline: Date;
}

export const ToDoSchema = SchemaFactory.createForClass(ToDo);
