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
exports.DeleteToDoDTO = exports.UpdateTodoDTO = exports.CreateToDoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
class CreateToDoDto {
}
exports.CreateToDoDto = CreateToDoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Buy groceries',
        description: 'The title of the to-do item',
    }),
    __metadata("design:type", String)
], CreateToDoDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Buy milk, bread, and eggs',
        description: 'The description of the to-do item',
    }),
    __metadata("design:type", String)
], CreateToDoDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Author ID' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateToDoDto.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Folder ID' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], CreateToDoDto.prototype, "folderId", void 0);
class UpdateTodoDTO {
}
exports.UpdateTodoDTO = UpdateTodoDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Buy groceries',
        description: 'The title of the to-do item',
    }),
    __metadata("design:type", String)
], UpdateTodoDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Buy milk, bread, and eggs',
        description: 'The description of the to-do item',
    }),
    __metadata("design:type", String)
], UpdateTodoDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'in-progress',
        description: 'The status of the to-do item',
    }),
    __metadata("design:type", String)
], UpdateTodoDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Is the to-do item completed?' }),
    __metadata("design:type", Boolean)
], UpdateTodoDTO.prototype, "isCompleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Editor ID' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], UpdateTodoDTO.prototype, "editor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'To-do ID' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], UpdateTodoDTO.prototype, "todoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Folder ID' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], UpdateTodoDTO.prototype, "folderId", void 0);
class DeleteToDoDTO {
}
exports.DeleteToDoDTO = DeleteToDoDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Member ID' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], DeleteToDoDTO.prototype, "memberId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'To-do ID' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], DeleteToDoDTO.prototype, "todoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Folder ID' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], DeleteToDoDTO.prototype, "folderId", void 0);
//# sourceMappingURL=todo.dto.js.map