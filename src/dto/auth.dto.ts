import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
  @ApiProperty({
    example: 'john@example.com',
    description: 'The email of the member',
  })
  readonly email: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the member',
  })
  readonly password: string;
}
