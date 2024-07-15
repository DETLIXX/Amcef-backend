import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateFolderDTO {
  @ApiProperty({ example: 'My Folder', description: 'The title of the folder' })
  readonly title: string;

  @ApiProperty({ type: String, description: 'Author ID' })
  readonly author: Types.ObjectId;
}

export class UpdateFolderDTO {
  @ApiProperty({
    example: 'Updated Folder Title',
    description: 'The title of the folder',
  })
  readonly title: string;

  @ApiProperty({ type: String, description: 'Author ID' })
  readonly author: Types.ObjectId;

  @ApiProperty({ type: String, description: 'Folder ID' })
  readonly folderId: Types.ObjectId;
}
