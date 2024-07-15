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
exports.FolderController = void 0;
const common_1 = require("@nestjs/common");
const Folder_schema_1 = require("../../schemas/Folder.schema");
const folders_service_1 = require("./folders.service");
const folder_dto_1 = require("../../dto/folder.dto");
const members_dto_1 = require("../../dto/members.dto");
const jwt_guard_1 = require("../../auth/guards/jwt.guard");
const swagger_1 = require("@nestjs/swagger");
let FolderController = class FolderController {
    constructor(folderService) {
        this.folderService = folderService;
    }
    async getFolders() {
        return await this.folderService.getFolders();
    }
    async createFolder(body) {
        return this.folderService.createFolder(body);
    }
    async editFolder(body) {
        return this.folderService.editFolder(body);
    }
    async assignMember(body) {
        return this.folderService.assignMember(body);
    }
    async unassignMember(body) {
        return this.folderService.unassignMember(body);
    }
};
exports.FolderController = FolderController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all folders' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully retrieved folders',
        type: [Folder_schema_1.Folder],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FolderController.prototype, "getFolders", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new folder' }),
    (0, swagger_1.ApiBody)({ type: folder_dto_1.CreateFolderDTO }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Folder successfully created',
        type: Folder_schema_1.Folder,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [folder_dto_1.CreateFolderDTO]),
    __metadata("design:returntype", Promise)
], FolderController.prototype, "createFolder", null);
__decorate([
    (0, common_1.Post)('/edit'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Edit an existing folder' }),
    (0, swagger_1.ApiBody)({ type: folder_dto_1.UpdateFolderDTO }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Folder successfully edited',
        type: Folder_schema_1.Folder,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [folder_dto_1.UpdateFolderDTO]),
    __metadata("design:returntype", Promise)
], FolderController.prototype, "editFolder", null);
__decorate([
    (0, common_1.Post)('/assign-members'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Assign members to a folder' }),
    (0, swagger_1.ApiBody)({ type: members_dto_1.AssignMemberDTO }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Members successfully assigned' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [members_dto_1.AssignMemberDTO]),
    __metadata("design:returntype", Promise)
], FolderController.prototype, "assignMember", null);
__decorate([
    (0, common_1.Post)('/unassign-members'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Unassign members from a folder' }),
    (0, swagger_1.ApiBody)({ type: members_dto_1.UnassignMemberDTO }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Members successfully unassigned' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [members_dto_1.UnassignMemberDTO]),
    __metadata("design:returntype", Promise)
], FolderController.prototype, "unassignMember", null);
exports.FolderController = FolderController = __decorate([
    (0, swagger_1.ApiTags)('folders'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('folders'),
    __metadata("design:paramtypes", [folders_service_1.FolderService])
], FolderController);
//# sourceMappingURL=folders.controller.js.map