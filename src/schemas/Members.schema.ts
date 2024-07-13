import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ToDo } from './Todo.schema';

export class MemberSchema {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ default: 'User', enum: ['User', 'Admin'] })
  role: string[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }] })
  assignedTodos: ToDo[];

  @Prop({ default: new Date() })
  createdAt: Date;
}

export const MemberSchemaEntity = SchemaFactory.createForClass(MemberSchema);
