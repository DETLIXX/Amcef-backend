import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDo, ToDoSchema } from 'src/schemas/Todo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ToDo.name, schema: ToDoSchema }]),
  ],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
