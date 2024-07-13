import { ToDo } from 'src/schemas/Todo.schema';
import mongoose from 'mongoose';
export declare class TodosService {
    private todoModel;
    constructor(todoModel: mongoose.Model<ToDo>);
    getTodos(): Promise<ToDo[]>;
    getTodoById(id: string): Promise<ToDo>;
    createTodo(body: ToDo): Promise<ToDo>;
}
