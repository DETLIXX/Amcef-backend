import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Member } from './Members.schema';
export type ToDoDocument = HydratedDocument<ToDo>;
declare class UpdateHistory {
    updatedBy: Member;
    updatedAt: Date;
}
export declare class ToDo {
    _id: mongoose.Schema.Types.ObjectId;
    title: string;
    description: string;
    isCompleted: boolean;
    createdAt: Date;
    updateHistory: UpdateHistory[];
    author: Member;
    status: string;
}
export declare const ToDoSchema: mongoose.Schema<ToDo, mongoose.Model<ToDo, any, any, any, mongoose.Document<unknown, any, ToDo> & ToDo & Required<{
    _id: mongoose.Schema.Types.ObjectId;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ToDo, mongoose.Document<unknown, {}, mongoose.FlatRecord<ToDo>> & mongoose.FlatRecord<ToDo> & Required<{
    _id: mongoose.Schema.Types.ObjectId;
}>>;
export {};
