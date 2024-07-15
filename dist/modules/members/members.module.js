"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberModule = void 0;
const common_1 = require("@nestjs/common");
const members_controller_1 = require("./members.controller");
const members_service_1 = require("./members.service");
const mongoose_1 = require("@nestjs/mongoose");
const Members_schema_1 = require("../../schemas/Members.schema");
const folders_module_1 = require("../folders/folders.module");
const auth_common_service_1 = require("../../common/auth.common.service");
let MemberModule = class MemberModule {
};
exports.MemberModule = MemberModule;
exports.MemberModule = MemberModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Member', schema: Members_schema_1.MemberSchema }]),
            (0, common_1.forwardRef)(() => folders_module_1.FoldersModule),
        ],
        controllers: [members_controller_1.MembersController],
        providers: [members_service_1.MembersService, auth_common_service_1.HashService],
        exports: [MemberModule, mongoose_1.MongooseModule],
    })
], MemberModule);
//# sourceMappingURL=members.module.js.map