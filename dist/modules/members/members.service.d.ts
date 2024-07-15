import mongoose from 'mongoose';
import { Member } from 'src/schemas/Members.schema';
import { Folder } from 'src/schemas/Folder.schema';
import { HashService } from 'src/common/auth.common.service';
export declare class MembersService {
    private memberModel;
    private folderModel;
    private readonly hashService;
    constructor(memberModel: mongoose.Model<Member>, folderModel: mongoose.Model<Folder>, hashService: HashService);
    getAllMembers(): Promise<Member[]>;
}
