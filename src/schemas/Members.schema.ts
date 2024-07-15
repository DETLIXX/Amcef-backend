import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { ToDo } from './Todo.schema';

export type MemberDocument = HydratedDocument<Member>;

@Schema()
export class Member {
  @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
  _id: mongoose.Schema.Types.ObjectId;

  @Prop()
  username: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password?: string;

  @Prop({ default: 'User' })
  role: string[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Folder' }] })
  assignedFolders: ToDo[];

  @Prop({ default: new Date() })
  createdAt: Date;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
