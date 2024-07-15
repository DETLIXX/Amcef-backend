import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { Strategy } from 'passport-local';
import { HashService } from 'src/common/auth.common.service';
import { Member } from 'src/schemas/Members.schema';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(Member.name) private memberModel: Model<Member>,
    private hashService: HashService,
    private jwtService: JwtService,
  ) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    console.log('LocalStrategy validate');

    const member = await this.memberModel.findOne({ email }).lean().exec();

    if (!member) throw new NotFoundException('Member not found');

    const isPasswordValid = await this.hashService.comparePassword(
      password,
      member.password,
    );

    if (!isPasswordValid)
      throw new UnauthorizedException('Password is not valid');

    delete member.password;

    return this.jwtService.sign(member);
  }
}
