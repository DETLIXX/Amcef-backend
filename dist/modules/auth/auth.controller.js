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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const local_guard_1 = require("../../auth/guards/local.guard");
const auth_service_1 = require("./auth.service");
const members_dto_1 = require("../../dto/members.dto");
const swagger_1 = require("@nestjs/swagger");
const Members_schema_1 = require("../../schemas/Members.schema");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(body, req) {
        return req.user;
    }
    async register(body, req) {
        const returnRegister = this.authService.register(body);
        return returnRegister;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UseGuards)(local_guard_1.LocalGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Login a user' }),
    (0, swagger_1.ApiBody)({
        schema: { example: { email: 'john@example.com', password: 'password123' } },
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully logged in',
        type: Members_schema_1.Member,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'Register a new user' }),
    (0, swagger_1.ApiBody)({ type: members_dto_1.CreateMemberDTO }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'User successfully registered',
        type: Members_schema_1.Member,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [members_dto_1.CreateMemberDTO, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map