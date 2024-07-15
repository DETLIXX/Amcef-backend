import { Model } from 'mongoose';
import { LoginDTO } from 'src/dto/auth.dto';
import { Member } from 'src/schemas/Members.schema';
import { HashService } from '../../common/auth.common.service';
import { CreateMemberDTO } from 'src/dto/members.dto';
export declare class AuthService {
    private memberModel;
    private readonly hashService;
    constructor(memberModel: Model<Member>, hashService: HashService);
    login(body: LoginDTO): Promise<object>;
    register(body: CreateMemberDTO): Promise<Member>;
}
