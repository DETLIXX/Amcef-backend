import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateToDoDto {
  @ApiProperty({
    example: 'Buy groceries',
    description: 'The title of the to-do item',
  })
  readonly title: string;

  @ApiProperty({
    example: 'Buy milk, bread, and eggs',
    description: 'The description of the to-do item',
  })
  readonly description: string;

  @ApiProperty({ type: String, description: 'Author ID' })
  readonly author: Types.ObjectId;

  @ApiProperty({ type: String, description: 'Folder ID' })
  readonly folderId: Types.ObjectId;
}

export class UpdateTodoDTO {
  @ApiProperty({
    example: 'Buy groceries',
    description: 'The title of the to-do item',
  })
  readonly title: string;

  @ApiProperty({
    example: 'Buy milk, bread, and eggs',
    description: 'The description of the to-do item',
  })
  readonly description: string;

  @ApiProperty({
    example: 'in-progress',
    description: 'The status of the to-do item',
  })
  readonly status: string;

  @ApiProperty({ example: true, description: 'Is the to-do item completed?' })
  readonly isCompleted: boolean;

  @ApiProperty({ type: String, description: 'Editor ID' })
  readonly editor: Types.ObjectId;

  @ApiProperty({ type: String, description: 'To-do ID' })
  readonly todoId: Types.ObjectId;

  @ApiProperty({ type: String, description: 'Folder ID' })
  readonly folderId: Types.ObjectId;
}

export class DeleteToDoDTO {
  @ApiProperty({ type: String, description: 'Member ID' })
  readonly memberId: Types.ObjectId;

  @ApiProperty({ type: String, description: 'To-do ID' })
  readonly todoId: Types.ObjectId;

  @ApiProperty({ type: String, description: 'Folder ID' })
  readonly folderId: Types.ObjectId;
}
