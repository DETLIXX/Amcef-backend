import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { MemberSchema } from './Members.schema';
export type ToDoDocument = HydratedDocument<ToDo>;
export declare class ToDo {
    title: string;
    uniqe: string;
    description: string;
    isCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    members: MemberSchema;
    author: MemberSchema;
}
export declare const ToDoSchema: mongoose.Schema<ToDo, mongoose.Model<ToDo, any, any, any, mongoose.Document<unknown, any, ToDo> & ToDo & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ToDo, mongoose.Document<unknown, {}, mongoose.FlatRecord<ToDo>> & mongoose.FlatRecord<ToDo> & {
    _id: mongoose.Types.ObjectId;
}>;
