import mongoose, { HydratedDocument } from 'mongoose';
import { ToDo } from './Todo.schema';
export type MemberDocument = HydratedDocument<Member>;
export declare class Member {
    _id: mongoose.Schema.Types.ObjectId;
    username: string;
    email: string;
    password?: string;
    role: string[];
    assignedFolders: ToDo[];
    createdAt: Date;
}
export declare const MemberSchema: mongoose.Schema<Member, mongoose.Model<Member, any, any, any, mongoose.Document<unknown, any, Member> & Member & Required<{
    _id: mongoose.Schema.Types.ObjectId;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Member, mongoose.Document<unknown, {}, mongoose.FlatRecord<Member>> & mongoose.FlatRecord<Member> & Required<{
    _id: mongoose.Schema.Types.ObjectId;
}>>;
