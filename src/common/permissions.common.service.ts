import { Injectable } from '@nestjs/common';

@Injectable()
export class PermissionsService {
  async isFolderMembers(memberId: string, folderId: string) {
    console.log(memberId, folderId);

    return true;
  }
}
