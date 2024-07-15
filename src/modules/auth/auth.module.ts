/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MemberModule } from '../members/members.module';
import { AuthService } from './auth.service';
import { HashService } from 'src/common/auth.common.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { LocalStrategy } from 'src/auth/strategies/local.strategy';

@Module({
  imports: [
    MemberModule,
    PassportModule,
    JwtModule.register({
      secret: 'jahodka123',
      signOptions: { expiresIn: '15m' },
    }),
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy, HashService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
