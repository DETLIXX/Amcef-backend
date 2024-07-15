import { Types } from 'mongoose';
export declare class CreateToDoDto {
    readonly title: string;
    readonly description: string;
    readonly author: Types.ObjectId;
    readonly folderId: Types.ObjectId;
}
export declare class UpdateTodoDTO {
    readonly title: string;
    readonly description: string;
    readonly status: string;
    readonly isCompleted: boolean;
    readonly editor: Types.ObjectId;
    readonly todoId: Types.ObjectId;
    readonly folderId: Types.ObjectId;
}
export declare class DeleteToDoDTO {
    readonly memberId: Types.ObjectId;
    readonly todoId: Types.ObjectId;
    readonly folderId: Types.ObjectId;
}
