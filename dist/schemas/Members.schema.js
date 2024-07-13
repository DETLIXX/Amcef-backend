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
exports.MemberSchemaEntity = exports.MemberSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
class MemberSchema {
}
exports.MemberSchema = MemberSchema;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MemberSchema.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MemberSchema.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MemberSchema.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'User', enum: ['User', 'Admin'] }),
    __metadata("design:type", Array)
], MemberSchema.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Todo' }] }),
    __metadata("design:type", Array)
], MemberSchema.prototype, "assignedTodos", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date() }),
    __metadata("design:type", Date)
], MemberSchema.prototype, "createdAt", void 0);
exports.MemberSchemaEntity = mongoose_1.SchemaFactory.createForClass(MemberSchema);
//# sourceMappingURL=Members.schema.js.map