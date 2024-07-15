import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDo, ToDoSchema } from 'src/schemas/Todo.schema';
import { MemberModule } from 'src/modules/members/members.module';
import { FoldersModule } from '../folders/folders.module';
import { PermissionsService } from 'src/common/permissions.common.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ToDo.name, schema: ToDoSchema }]),
    MemberModule,
    FoldersModule,
  ],
  controllers: [TodosController],
  providers: [TodosService, PermissionsService],
})
export class TodosModule {}
