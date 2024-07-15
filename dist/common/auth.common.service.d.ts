import { Model } from 'mongoose';
import { Member } from 'src/schemas/Members.schema';
export declare class HashService {
    private readonly memberModel;
    constructor(memberModel: Model<Member>);
    private readonly saltRound;
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string, hash: string): Promise<boolean>;
    signJWT(body: object): Promise<string>;
    verifyJWT(): Promise<void>;
}
