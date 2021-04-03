import { Controller, Get, Req } from '@nestjs/common';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { Request } from 'express';
import { UserService } from 'src/user/user.service';

@Controller('auth-works-with-strict-false')
export class AuthWorksWithStrictFalseController {
  constructor(private moduleRef: ModuleRef) {}

  @Get()
  async get(@Req() req: Request) {
    const contextId = ContextIdFactory.getByRequest(req);
    const userService = await this.moduleRef.resolve(UserService, contextId, {
      strict: false,
    }); // { strict: false } is necessary here
    return userService.getByEmail('some@email.com');
  }
}
