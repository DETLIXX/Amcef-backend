import { Folder, FolderSchema } from 'src/schemas/Folder.schema';
import { FolderController } from './folders.controller';
import { FolderService } from './folders.service';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberModule } from '../members/members.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Folder.name, schema: FolderSchema }]),
    forwardRef(() => MemberModule),
  ],
  controllers: [FolderController],
  providers: [FolderService],
  exports: [FoldersModule, MongooseModule],
})
export class FoldersModule {}
