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
exports.MembersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Members_schema_1 = require("../../schemas/Members.schema");
const Folder_schema_1 = require("../../schemas/Folder.schema");
const auth_common_service_1 = require("../../common/auth.common.service");
let MembersService = class MembersService {
    constructor(memberModel, folderModel, hashService) {
        this.memberModel = memberModel;
        this.folderModel = folderModel;
        this.hashService = hashService;
    }
    async getAllMembers() {
        const returnUser = await this.memberModel
            .find()
            .select('-password')
            .populate({ path: 'assignedFolders', model: this.folderModel })
            .exec();
        return returnUser;
    }
};
exports.MembersService = MembersService;
exports.MembersService = MembersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Members_schema_1.Member.name)),
    __param(1, (0, mongoose_1.InjectModel)(Folder_schema_1.Folder.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model, mongoose_2.default.Model, auth_common_service_1.HashService])
], MembersService);
//# sourceMappingURL=members.service.js.map