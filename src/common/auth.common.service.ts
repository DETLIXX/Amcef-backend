import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Model, Types } from 'mongoose';
import { Member } from 'src/schemas/Members.schema';

@Injectable()
export class HashService {
  constructor(
    @InjectModel(Member.name) private readonly memberModel: Model<Member>,
  ) {}
  private readonly saltRound = 10;

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRound);
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  async signJWT(body: object) {
    return jwt.sign(body, process.env.JWT_SECRET);
  }

  async verifyJWT() {
    return;
  }
}
