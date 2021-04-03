import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('auth-works')
export class AuthWorksController {
  constructor(private userService: UserService) {}

  @Get()
  get() {
    return this.userService.getByEmail('some@email.com');
  }
}
