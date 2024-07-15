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
exports.FolderSchema = exports.Folder = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const Members_schema_1 = require("./Members.schema");
let Folder = class Folder {
};
exports.Folder = Folder;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Folder.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ToDo' }] }),
    __metadata("design:type", Array)
], Folder.prototype, "todos", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Members' }),
    __metadata("design:type", Members_schema_1.Member)
], Folder.prototype, "author", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Members' }] }),
    __metadata("design:type", Array)
], Folder.prototype, "members", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date() }),
    __metadata("design:type", Date)
], Folder.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date() }),
    __metadata("design:type", Date)
], Folder.prototype, "updatedAt", void 0);
exports.Folder = Folder = __decorate([
    (0, mongoose_1.Schema)()
], Folder);
exports.FolderSchema = mongoose_1.SchemaFactory.createForClass(Folder);
//# sourceMappingURL=Folder.schema.js.map