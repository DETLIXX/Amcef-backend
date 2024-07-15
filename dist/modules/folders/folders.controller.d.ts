import { Folder } from 'src/schemas/Folder.schema';
import { FolderService } from './folders.service';
import { CreateFolderDTO, UpdateFolderDTO } from 'src/dto/folder.dto';
import { AssignMemberDTO, UnassignMemberDTO } from 'src/dto/members.dto';
export declare class FolderController {
    private readonly folderService;
    constructor(folderService: FolderService);
    getFolders(): Promise<(import("mongoose").Document<unknown, {}, Folder> & Folder & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createFolder(body: CreateFolderDTO): Promise<Folder>;
    editFolder(body: UpdateFolderDTO): Promise<Folder>;
    assignMember(body: AssignMemberDTO): Promise<AssignMemberDTO>;
    unassignMember(body: UnassignMemberDTO): Promise<UnassignMemberDTO>;
}
