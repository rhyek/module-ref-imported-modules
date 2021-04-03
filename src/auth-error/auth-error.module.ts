import { Module } from '@nestjs/common';
import { AuthErrorController } from 'src/auth-error/auth-error.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AuthErrorController],
})
export class AuthErrorModule {}
