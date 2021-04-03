import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class UserService {
  getByEmail(email: string) {
    return { id: '1', email };
  }
}
