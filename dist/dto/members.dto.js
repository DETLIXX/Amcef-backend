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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnassignMemberDTO = exports.AssignMemberDTO = exports.CreateMemberDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
class CreateMemberDTO {
}
exports.CreateMemberDTO = CreateMemberDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'john_doe',
        description: 'The username of the new member',
    }),
    __metadata("design:type", String)
], CreateMemberDTO.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'john@example.com',
        description: 'The email of the new member',
    }),
    __metadata("design:type", String)
], CreateMemberDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'password123',
        description: 'The password of the new member',
    }),
    __metadata("design:type", String)
], CreateMemberDTO.prototype, "password", void 0);
class AssignMemberDTO {
}
exports.AssignMemberDTO = AssignMemberDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        description: 'Array of member IDs to be assigned',
    }),
    __metadata("design:type", Array)
], AssignMemberDTO.prototype, "members", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Author ID' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], AssignMemberDTO.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Folder ID' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], AssignMemberDTO.prototype, "folderId", void 0);
class UnassignMemberDTO {
}
exports.UnassignMemberDTO = UnassignMemberDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Member ID to be unassigned' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], UnassignMemberDTO.prototype, "member", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Author ID' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], UnassignMemberDTO.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Folder ID' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], UnassignMemberDTO.prototype, "folderId", void 0);
//# sourceMappingURL=members.dto.js.map