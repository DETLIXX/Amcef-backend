import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { Strategy } from 'passport-local';
import { HashService } from 'src/common/auth.common.service';
import { Member } from 'src/schemas/Members.schema';
declare const LocalStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class LocalStrategy extends LocalStrategy_base {
    private memberModel;
    private hashService;
    private jwtService;
    constructor(memberModel: Model<Member>, hashService: HashService, jwtService: JwtService);
    validate(email: string, password: string): Promise<string>;
}
export {};
