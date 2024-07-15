import { Types } from 'mongoose';
export declare class CreateFolderDTO {
    readonly title: string;
    readonly author: Types.ObjectId;
}
export declare class UpdateFolderDTO {
    readonly title: string;
    readonly author: Types.ObjectId;
    readonly folderId: Types.ObjectId;
}
