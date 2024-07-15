// Create me schema for ToDO Folder
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Member } from './Members.schema';
import { ToDo } from './Todo.schema';
import { HydratedDocument } from 'mongoose';

export type FolderDocument = HydratedDocument<Folder>;

@Schema()
export class Folder {
  @Prop({ required: true })
  title: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ToDo' }] })
  todos?: ToDo[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Members' })
  author?: Member;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Members' }] })
  members?: Member[];

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop({ default: new Date() })
  updatedAt: Date;
}
export const FolderSchema = SchemaFactory.createForClass(Folder);
