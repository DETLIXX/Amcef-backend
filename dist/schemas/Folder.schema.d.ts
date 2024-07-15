import * as mongoose from 'mongoose';
import { Member } from './Members.schema';
import { ToDo } from './Todo.schema';
import { HydratedDocument } from 'mongoose';
export type FolderDocument = HydratedDocument<Folder>;
export declare class Folder {
    title: string;
    todos?: ToDo[];
    author?: Member;
    members?: Member[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const FolderSchema: mongoose.Schema<Folder, mongoose.Model<Folder, any, any, any, mongoose.Document<unknown, any, Folder> & Folder & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Folder, mongoose.Document<unknown, {}, mongoose.FlatRecord<Folder>> & mongoose.FlatRecord<Folder> & {
    _id: mongoose.Types.ObjectId;
}>;
