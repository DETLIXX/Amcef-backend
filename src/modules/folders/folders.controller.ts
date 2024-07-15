/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Folder } from 'src/schemas/Folder.schema';
import { FolderService } from './folders.service';
import { CreateFolderDTO, UpdateFolderDTO } from 'src/dto/folder.dto';
import { AssignMemberDTO, UnassignMemberDTO } from 'src/dto/members.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('folders')
@ApiBearerAuth()
@Controller('folders')
export class FolderController {
  constructor(private readonly folderService: FolderService) {}

  @Get()
  @ApiOperation({ summary: 'Get all folders' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved folders',
    type: [Folder],
  })
  async getFolders() {
    return await this.folderService.getFolders();
  }

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a new folder' })
  @ApiBody({ type: CreateFolderDTO })
  @ApiResponse({
    status: 201,
    description: 'Folder successfully created',
    type: Folder,
  })
  async createFolder(@Body() body: CreateFolderDTO): Promise<Folder> {
    return this.folderService.createFolder(body);
  }

  @Post('/edit')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Edit an existing folder' })
  @ApiBody({ type: UpdateFolderDTO })
  @ApiResponse({
    status: 200,
    description: 'Folder successfully edited',
    type: Folder,
  })
  async editFolder(@Body() body: UpdateFolderDTO): Promise<Folder> {
    return this.folderService.editFolder(body);
  }

  @Post('/assign-members')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Assign members to a folder' })
  @ApiBody({ type: AssignMemberDTO })
  @ApiResponse({ status: 200, description: 'Members successfully assigned' })
  async assignMember(@Body() body: AssignMemberDTO) {
    return this.folderService.assignMember(body);
  }

  @Post('/unassign-members')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Unassign members from a folder' })
  @ApiBody({ type: UnassignMemberDTO })
  @ApiResponse({ status: 200, description: 'Members successfully unassigned' })
  async unassignMember(@Body() body: UnassignMemberDTO) {
    return this.folderService.unassignMember(body);
  }
}
