import { MembersService } from './members.service';
import { Member } from 'src/schemas/Members.schema';
export declare class MembersController {
    private readonly memberService;
    constructor(memberService: MembersService);
    getAllMembers(): Promise<Member[]>;
}
