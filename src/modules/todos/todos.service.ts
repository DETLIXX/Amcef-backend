import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { ToDo } from 'src/schemas/Todo.schema';
import { Member } from 'src/schemas/Members.schema';
import { Folder } from 'src/schemas/Folder.schema';
import { CreateToDoDto, DeleteToDoDTO, UpdateTodoDTO } from 'src/dto/todo.dto';
import { PermissionsService } from 'src/common/permissions.common.service';
@Injectable()
export class TodosService {
  constructor(
    @InjectModel(ToDo.name) private todoModel: mongoose.Model<ToDo>,
    @InjectModel(Member.name) private memberModel: mongoose.Model<Member>,
    @InjectModel(Folder.name) private folderModel: mongoose.Model<Folder>,
    private readonly permissionService: PermissionsService,
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

  async create(body: CreateToDoDto): Promise<ToDo> {
    const { title, description, author, folderId } = body;

    const folder = await this.findFolderById(folderId);

    if (!this.isFolderMember(folder, author)) {
      throw new ForbiddenException(
        'You are not allowed to create todo in this folder',
      );
    }

    const newTodo = await this.todoModel.create({
      title,
      description,
      author: new mongoose.Types.ObjectId(author),
    });

    await this.folderModel.findByIdAndUpdate(folderId, {
      $push: { todos: newTodo._id },
    });

    return newTodo;
  }

  async edit(body: UpdateTodoDTO): Promise<Partial<ToDo>> {
    const {
      title,
      description,
      status,
      isCompleted,
      editor,
      todoId,
      folderId,
    } = body;

    const [folder, todo] = await Promise.all([
      this.findFolderById(folderId),
      this.findTodoById(todoId),
    ]);

    if (
      !this.isFolderMember(folder, editor) &&
      !this.isToDoInFodler(todoId, folder)
    ) {
      throw new ForbiddenException('You are not allowed to delete this todo');
    }

    if (todo.isCompleted)
      throw new ForbiddenException(
        'Todo is already completed and cannot be edited',
      );

    if (!this.isFolderMember(folder, editor))
      throw new ForbiddenException('You are not allowed to edit this todo');

    const updatedTodo = await this.todoModel.findByIdAndUpdate(
      todoId,
      {
        title,
        description,
        status,
        isCompleted,
        $push: { updateHistory: { updatedBy: editor } },
      },
      { new: true },
    );

    return updatedTodo;
  }

  async delete(body: DeleteToDoDTO): Promise<object | null> {
    const { memberId, folderId, todoId } = body;

    const [findFolderById] = await Promise.all([this.findFolderById(folderId)]);

    if (
      !this.isFolderMember(findFolderById, memberId) ||
      !this.isToDoInFodler(todoId, findFolderById)
    ) {
      throw new ForbiddenException('You are not allowed to delete this todo');
    }

    const deletedTodo = await this.todoModel.findByIdAndDelete(todoId);

    return { msg: 'Todo deleted successfully', deletedTodo };
  }

  private async findFolderById(folderId: Types.ObjectId): Promise<Folder> {
    const folder = await this.folderModel
      .findById(folderId)
      .populate({ path: 'members todos', model: this.memberModel })
      .exec();

    if (!folder) {
      throw new NotFoundException('Folder not found');
    }

    return folder;
  }

  private async isToDoInFodler(todoId: Types.ObjectId, folder: Folder) {
    const isInFolder = folder.todos.some(
      (res) => res._id.toString() === todoId.toString(),
    );
    console.log(isInFolder);
    return isInFolder;
  }

  private async findTodoById(todoId: Types.ObjectId): Promise<ToDo> {
    const todo = await this.todoModel.findById(todoId).exec();
    console.log(todo);

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    return todo;
  }

  private isFolderMember(folder: Folder, memberId: Types.ObjectId): boolean {
    const isMember = folder.members.some(
      (member) => member._id.toString() === memberId.toString(),
    );

    return folder.author.toString() === memberId.toString() || isMember;
  }
}
