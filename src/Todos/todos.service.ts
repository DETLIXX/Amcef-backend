import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ToDo } from 'src/schemas/Todo.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(ToDo.name) private todoModel: mongoose.Model<ToDo>,
  ) {}

  async getTodos(): Promise<ToDo[]> {
    return this.todoModel.find().exec();
  }

  async getTodoById(id: string): Promise<ToDo> {
    const todo = await this.todoModel.findById(id).exec();
    if (!todo) {
      throw new NotFoundException('Todo not found');
    }
    return todo;
  }

  async createTodo(body: ToDo): Promise<ToDo> {
    const rs = await new this.todoModel({ ...body }).save();
    console.log(rs);
    return rs;
  }
}
