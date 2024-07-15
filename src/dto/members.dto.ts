import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateMemberDTO {
  @ApiProperty({
    example: 'john_doe',
    description: 'The username of the new member',
  })
  readonly username: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'The email of the new member',
  })
  readonly email: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the new member',
  })
  readonly password: string;
}

export class AssignMemberDTO {
  @ApiProperty({
    type: [String],
    description: 'Array of member IDs to be assigned',
  })
  readonly members: Types.ObjectId[];

  @ApiProperty({ type: String, description: 'Author ID' })
  readonly author: Types.ObjectId;

  @ApiProperty({ type: String, description: 'Folder ID' })
  readonly folderId: Types.ObjectId;
}

export class UnassignMemberDTO {
  @ApiProperty({ type: String, description: 'Member ID to be unassigned' })
  readonly member: Types.ObjectId;

  @ApiProperty({ type: String, description: 'Author ID' })
  readonly author: Types.ObjectId;

  @ApiProperty({ type: String, description: 'Folder ID' })
  readonly folderId: Types.ObjectId;
}
