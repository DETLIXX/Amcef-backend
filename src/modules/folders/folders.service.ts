/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Folder } from 'src/schemas/Folder.schema';
import { Member } from 'src/schemas/Members.schema';
import { CreateFolderDTO, UpdateFolderDTO } from 'src/dto/folder.dto';
import { AssignMemberDTO, UnassignMemberDTO } from 'src/dto/members.dto';

@Injectable()
export class FolderService {
  constructor(
    @InjectModel(Folder.name) private readonly folderModel: Model<Folder>,
    @InjectModel(Member.name) private readonly memberModel: Model<Member>,
  ) {}

  async getFolders() {
    return await this.folderModel.find().exec();
  }

  async createFolder(body: CreateFolderDTO): Promise<Folder> {
    const { title, author } = body;
    if (!title || !author) {
      throw new UnprocessableEntityException('Missing fields');
    }

    const returnFolder = await this.folderModel.create({
      title,
      author,
    });

    await this.memberModel.findByIdAndUpdate(author, {
      $push: { assignedFolders: returnFolder._id },
    });

    return returnFolder;
  }

  async editFolder(body: UpdateFolderDTO): Promise<Folder> {
    const { title, author, folderId } = body;

    if (!title || !author) {
      throw new UnprocessableEntityException('Missing fields');
    }

    const findFolder = await this.folderModel.findById(folderId);
    if (!findFolder) {
      throw new UnprocessableEntityException('Folder not found');
    }

    if (findFolder.author.toString() !== author.toString()) {
      throw new UnprocessableEntityException(
        'You cannot edit this folder because you are not the author',
      );
    }

    const returnFolder = await this.folderModel.findByIdAndUpdate(
      folderId,
      { title },
      { new: true },
    );

    return returnFolder;
  }

  async assignMember(body: AssignMemberDTO) {
    const { members, author, folderId } = body;

    if (!members || !author || !folderId)
      throw new UnprocessableEntityException('Missing fields');

    const folderAuthor = await this.folderModel.findById(folderId);

    if (folderAuthor.author.toString() !== author.toString()) {
      throw new UnprocessableEntityException('You are not folder author');
    }

    await this.folderModel.findByIdAndUpdate(folderId, {
      $push: { members: members },
    });

    members.map(async (res) => {
      await this.memberModel.findByIdAndUpdate(res, {
        $push: { assignedFolders: folderId },
      });
    });

    return body;
  }

  async unassignMember(body: UnassignMemberDTO) {
    const { member, author, folderId } = body;

    if (!member || !author || !folderId)
      throw new UnprocessableEntityException('Missing fields');

    const folderAuthor = await this.folderModel.findById(folderId);

    if (folderAuthor.author.toString() !== author.toString()) {
      throw new UnprocessableEntityException('You are not folder author');
    }

    await this.folderModel.findByIdAndUpdate(folderId, {
      $pull: { members: member },
    });

    await this.memberModel.findByIdAndUpdate(member, {
      $pull: { assignedFolders: folderId },
    });

    return body;
  }
}
