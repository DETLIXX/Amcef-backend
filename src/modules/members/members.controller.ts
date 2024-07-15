import { Body, Controller, Get, Post } from '@nestjs/common';
import { MembersService } from './members.service';
import { Member } from 'src/schemas/Members.schema';
import { CreateMemberDTO } from 'src/dto/members.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('members')
@Controller('members')
export class MembersController {
  constructor(private readonly memberService: MembersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all members' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved members',
    type: [Member],
  })
  getAllMembers(): Promise<Member[]> {
    return this.memberService.getAllMembers();
  }

  // If you have other endpoints for members, you can add them here with appropriate Swagger decorators
}
