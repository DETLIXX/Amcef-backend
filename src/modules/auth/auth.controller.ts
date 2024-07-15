/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { LocalGuard } from 'src/auth/guards/local.guard';
import { AuthService } from './auth.service';
import { CreateMemberDTO } from 'src/dto/members.dto';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { Member } from 'src/schemas/Members.schema';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  @ApiOperation({ summary: 'Login a user' })
  @ApiBody({
    schema: { example: { email: 'john@example.com', password: 'password123' } },
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully logged in',
    type: Member,
  })
  async login(@Body() body: object, @Req() req: Request) {
    return req.user;
  }

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: CreateMemberDTO })
  @ApiResponse({
    status: 201,
    description: 'User successfully registered',
    type: Member,
  })
  async register(@Body() body: CreateMemberDTO, @Req() req: Request) {
    const returnRegister = this.authService.register(body);
    return returnRegister;
  }
}
