import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Member } from 'src/schemas/Members.schema';
import { Folder } from 'src/schemas/Folder.schema';
import { CreateMemberDTO } from 'src/dto/members.dto';
import { HashService } from 'src/common/auth.common.service';

@Injectable()
export class MembersService {
  constructor(
    @InjectModel(Member.name) private memberModel: mongoose.Model<Member>,
    @InjectModel(Folder.name) private folderModel: mongoose.Model<Folder>,
    private readonly hashService: HashService,
  ) {}

  async getAllMembers(): Promise<Member[]> {
    const returnUser = await this.memberModel
      .find()
      .select('-password')
      .populate({ path: 'assignedFolders', model: this.folderModel })
      .exec();
    return returnUser;
  }
}
