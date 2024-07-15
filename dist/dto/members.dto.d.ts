import { Types } from 'mongoose';
export declare class CreateMemberDTO {
    readonly username: string;
    readonly email: string;
    readonly password: string;
}
export declare class AssignMemberDTO {
    readonly members: Types.ObjectId[];
    readonly author: Types.ObjectId;
    readonly folderId: Types.ObjectId;
}
export declare class UnassignMemberDTO {
    readonly member: Types.ObjectId;
    readonly author: Types.ObjectId;
    readonly folderId: Types.ObjectId;
}
