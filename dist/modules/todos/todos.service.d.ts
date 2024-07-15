import mongoose from 'mongoose';
import { ToDo } from 'src/schemas/Todo.schema';
import { Member } from 'src/schemas/Members.schema';
import { Folder } from 'src/schemas/Folder.schema';
import { CreateToDoDto, DeleteToDoDTO, UpdateTodoDTO } from 'src/dto/todo.dto';
import { PermissionsService } from 'src/common/permissions.common.service';
export declare class TodosService {
    private todoModel;
    private memberModel;
    private folderModel;
    private readonly permissionService;
    constructor(todoModel: mongoose.Model<ToDo>, memberModel: mongoose.Model<Member>, folderModel: mongoose.Model<Folder>, permissionService: PermissionsService);
    getTodos(): Promise<ToDo[]>;
    getTodoById(id: string): Promise<ToDo>;
    create(body: CreateToDoDto): Promise<ToDo>;
    edit(body: UpdateTodoDTO): Promise<Partial<ToDo>>;
    delete(body: DeleteToDoDTO): Promise<object | null>;
    private findFolderById;
    private isToDoInFodler;
    private findTodoById;
    private isFolderMember;
}
