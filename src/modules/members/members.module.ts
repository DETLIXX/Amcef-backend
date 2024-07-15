import { forwardRef, Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberSchema } from 'src/schemas/Members.schema';
import { FoldersModule } from '../folders/folders.module';
import { HashService } from 'src/common/auth.common.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Member', schema: MemberSchema }]),
    forwardRef(() => FoldersModule),
  ],
  controllers: [MembersController],
  providers: [MembersService, HashService],
  exports: [MemberModule, MongooseModule],
})
export class MemberModule {}
