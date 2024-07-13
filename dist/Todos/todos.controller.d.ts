import { TodosService } from './todos.service';
import { ToDo } from 'src/schemas/Todo.schema';
export declare class TodosController {
    private todoService;
    constructor(todoService: TodosService);
    getAllTodos(): Promise<ToDo[]>;
    getTodoByID(id: string): Promise<ToDo>;
    createTodo(body: ToDo): Promise<ToDo>;
}
