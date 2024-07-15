/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDTO } from 'src/dto/auth.dto';
import { Member } from 'src/schemas/Members.schema';
import { HashService } from '../../common/auth.common.service';
import { CreateMemberDTO } from 'src/dto/members.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Member.name) private memberModel: Model<Member>,
    private readonly hashService: HashService,
    private jwtService: JwtService,
  ) {}

  async register(body: CreateMemberDTO): Promise<Member> {
    const { username, email, password } = body;
    const returnHash = await this.hashService.hashPassword(password);
    const newMember = new this.memberModel({
      username,
      email,
      password: returnHash,
    });
    const savedMember = await newMember.save();
    const { password: _, ...memberWithoutPassword } = savedMember.toObject();
    return memberWithoutPassword;
  }
}
