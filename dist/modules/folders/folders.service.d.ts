import { Model } from 'mongoose';
import { Folder } from 'src/schemas/Folder.schema';
import { Member } from 'src/schemas/Members.schema';
import { CreateFolderDTO, UpdateFolderDTO } from 'src/dto/folder.dto';
import { AssignMemberDTO, UnassignMemberDTO } from 'src/dto/members.dto';
export declare class FolderService {
    private readonly folderModel;
    private readonly memberModel;
    constructor(folderModel: Model<Folder>, memberModel: Model<Member>);
    getFolders(): Promise<(import("mongoose").Document<unknown, {}, Folder> & Folder & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createFolder(body: CreateFolderDTO): Promise<Folder>;
    editFolder(body: UpdateFolderDTO): Promise<Folder>;
    assignMember(body: AssignMemberDTO): Promise<AssignMemberDTO>;
    unassignMember(body: UnassignMemberDTO): Promise<UnassignMemberDTO>;
}
