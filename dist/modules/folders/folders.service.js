"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const Folder_schema_1 = require("../../schemas/Folder.schema");
const Members_schema_1 = require("../../schemas/Members.schema");
let FolderService = class FolderService {
    constructor(folderModel, memberModel) {
        this.folderModel = folderModel;
        this.memberModel = memberModel;
    }
    async getFolders() {
        return await this.folderModel.find().exec();
    }
    async createFolder(body) {
        const { title, author } = body;
        if (!title || !author) {
            throw new common_1.UnprocessableEntityException('Missing fields');
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
    async editFolder(body) {
        const { title, author, folderId } = body;
        if (!title || !author) {
            throw new common_1.UnprocessableEntityException('Missing fields');
        }
        const findFolder = await this.folderModel.findById(folderId);
        if (!findFolder) {
            throw new common_1.UnprocessableEntityException('Folder not found');
        }
        if (findFolder.author.toString() !== author.toString()) {
            throw new common_1.UnprocessableEntityException('You cannot edit this folder because you are not the author');
        }
        const returnFolder = await this.folderModel.findByIdAndUpdate(folderId, { title }, { new: true });
        return returnFolder;
    }
    async assignMember(body) {
        const { members, author, folderId } = body;
        if (!members || !author || !folderId)
            throw new common_1.UnprocessableEntityException('Missing fields');
        const folderAuthor = await this.folderModel.findById(folderId);
        if (folderAuthor.author.toString() !== author.toString()) {
            throw new common_1.UnprocessableEntityException('You are not folder author');
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
    async unassignMember(body) {
        const { member, author, folderId } = body;
        if (!member || !author || !folderId)
            throw new common_1.UnprocessableEntityException('Missing fields');
        const folderAuthor = await this.folderModel.findById(folderId);
        if (folderAuthor.author.toString() !== author.toString()) {
            throw new common_1.UnprocessableEntityException('You are not folder author');
        }
        await this.folderModel.findByIdAndUpdate(folderId, {
            $pull: { members: member },
        });
        await this.memberModel.findByIdAndUpdate(member, {
            $pull: { assignedFolders: folderId },
        });
        return body;
    }
};
exports.FolderService = FolderService;
exports.FolderService = FolderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(Folder_schema_1.Folder.name)),
    __param(1, (0, mongoose_2.InjectModel)(Members_schema_1.Member.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], FolderService);
//# sourceMappingURL=folders.service.js.map