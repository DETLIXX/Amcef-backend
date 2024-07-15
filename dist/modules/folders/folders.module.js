"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoldersModule = void 0;
const Folder_schema_1 = require("../../schemas/Folder.schema");
const folders_controller_1 = require("./folders.controller");
const folders_service_1 = require("./folders.service");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const members_module_1 = require("../members/members.module");
let FoldersModule = class FoldersModule {
};
exports.FoldersModule = FoldersModule;
exports.FoldersModule = FoldersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: Folder_schema_1.Folder.name, schema: Folder_schema_1.FolderSchema }]),
            (0, common_1.forwardRef)(() => members_module_1.MemberModule),
        ],
        controllers: [folders_controller_1.FolderController],
        providers: [folders_service_1.FolderService],
        exports: [FoldersModule, mongoose_1.MongooseModule],
    })
], FoldersModule);
//# sourceMappingURL=folders.module.js.map