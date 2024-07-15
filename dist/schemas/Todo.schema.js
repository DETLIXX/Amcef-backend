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
exports.ToDoSchema = exports.ToDo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const Members_schema_1 = require("./Members.schema");
let UpdateHistory = class UpdateHistory {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Members' }),
    __metadata("design:type", Members_schema_1.Member)
], UpdateHistory.prototype, "updatedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date() }),
    __metadata("design:type", Date)
], UpdateHistory.prototype, "updatedAt", void 0);
UpdateHistory = __decorate([
    (0, mongoose_1.Schema)()
], UpdateHistory);
const UpdateHistorySchema = mongoose_1.SchemaFactory.createForClass(UpdateHistory);
let ToDo = class ToDo {
};
exports.ToDo = ToDo;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, auto: true }),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], ToDo.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ToDo.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ToDo.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ToDo.prototype, "isCompleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date() }),
    __metadata("design:type", Date)
], ToDo.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [UpdateHistorySchema], default: [] }),
    __metadata("design:type", Array)
], ToDo.prototype, "updateHistory", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Members' }),
    __metadata("design:type", Members_schema_1.Member)
], ToDo.prototype, "author", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'todo' }),
    __metadata("design:type", String)
], ToDo.prototype, "status", void 0);
exports.ToDo = ToDo = __decorate([
    (0, mongoose_1.Schema)()
], ToDo);
exports.ToDoSchema = mongoose_1.SchemaFactory.createForClass(ToDo);
//# sourceMappingURL=Todo.schema.js.map