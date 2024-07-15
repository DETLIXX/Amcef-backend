import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { ToDo } from 'src/schemas/Todo.schema';
import { CreateToDoDto, UpdateTodoDTO, DeleteToDoDTO } from 'src/dto/todo.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  getAllTodos(): Promise<ToDo[]> {
    return this.todoService.getTodos();
  }

  @Get('/:id')
  getTodoByID(@Param('id') id: string): Promise<ToDo> {
    console.log(id);
    return this.todoService.getTodoById(id);
  }

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  async createTodo(@Body() body: CreateToDoDto): Promise<ToDo> {
    return await this.todoService.create(body);
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  async editTodo(@Body() body: UpdateTodoDTO): Promise<Partial<ToDo>> {
    return await this.todoService.edit(body);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async deleteTodo(@Body() body: DeleteToDoDTO): Promise<object | null> {
    return await this.todoService.delete(body);
  }
}
