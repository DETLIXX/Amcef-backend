import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { ToDo } from 'src/schemas/Todo.schema';

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}

  @Get()
  getAllTodos(): Promise<ToDo[]> {
    return this.todoService.getTodos();
  }

  @Get('/:id')
  getTodoByID(@Param('id') id: string): Promise<ToDo> {
    console.log(id);
    return this.todoService.getTodoById(id);
  }

  @Post()
  async createTodo(@Body() body: ToDo): Promise<ToDo> {
    const returnService = this.todoService.createTodo(body);

    return returnService;
  }
}
