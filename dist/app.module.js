"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const auth_module_1 = require("./modules/auth/auth.module");
const folders_module_1 = require("./modules/folders/folders.module");
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const app_controller_1 = require("./app.controller");
const todos_module_1 = require("./modules/todos/todos.module");
const mongoose_module_1 = require("@nestjs/mongoose/dist/mongoose.module");
const members_module_1 = require("./modules/members/members.module");
const auth_common_service_1 = require("./common/auth.common.service");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            folders_module_1.FoldersModule,
            mongoose_module_1.MongooseModule.forRoot('mongodb://127.0.0.1:27017/amcef'),
            todos_module_1.TodosModule,
            members_module_1.MemberModule,
            folders_module_1.FoldersModule,
            config_1.ConfigModule.forRoot({
                envFilePath: '.env.local',
                isGlobal: true,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, auth_common_service_1.HashService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map