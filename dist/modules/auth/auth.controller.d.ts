import { Request } from 'express';
import { AuthService } from './auth.service';
import { CreateMemberDTO } from 'src/dto/members.dto';
import { Member } from 'src/schemas/Members.schema';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: object, req: Request): Promise<Express.User>;
    register(body: CreateMemberDTO, req: Request): Promise<Member>;
}
