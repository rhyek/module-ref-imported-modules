import { Module } from '@nestjs/common';
import { AuthWorksWithStrictFalseController } from 'src/auth-works-with-strict-false/auth-works-with-strict-false.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AuthWorksWithStrictFalseController],
})
export class AuthWorksWithStrictFalseModule {}
