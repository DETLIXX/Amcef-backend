import mongoose from 'mongoose';
import { ToDo } from './Todo.schema';
export declare class MemberSchema {
    username: string;
    email: string;
    password: string;
    role: string[];
    assignedTodos: ToDo[];
    createdAt: Date;
}
export declare const MemberSchemaEntity: mongoose.Schema<MemberSchema, mongoose.Model<MemberSchema, any, any, any, mongoose.Document<unknown, any, MemberSchema> & MemberSchema & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, MemberSchema, mongoose.Document<unknown, {}, mongoose.FlatRecord<MemberSchema>> & mongoose.FlatRecord<MemberSchema> & {
    _id: mongoose.Types.ObjectId;
}>;
