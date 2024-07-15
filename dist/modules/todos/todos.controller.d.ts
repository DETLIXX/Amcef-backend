import { TodosService } from './todos.service';
import { ToDo } from 'src/schemas/Todo.schema';
import { CreateToDoDto, UpdateTodoDTO, DeleteToDoDTO } from 'src/dto/todo.dto';
export declare class TodosController {
    private readonly todoService;
    constructor(todoService: TodosService);
    getAllTodos(): Promise<ToDo[]>;
    getTodoByID(id: string): Promise<ToDo>;
    createTodo(body: CreateToDoDto): Promise<ToDo>;
    editTodo(body: UpdateTodoDTO): Promise<Partial<ToDo>>;
    deleteTodo(body: DeleteToDoDTO): Promise<object | null>;
}
