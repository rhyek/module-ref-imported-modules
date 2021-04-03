import { Module } from '@nestjs/common';
import { AuthWorksController } from 'src/auth-works/auth-works.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AuthWorksController],
})
export class AuthWorksModule {}
