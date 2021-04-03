import { Module } from '@nestjs/common';
import { AuthErrorModule } from 'src/auth-error/auth-error.module';
import { AuthWorksWithStrictFalseModule } from 'src/auth-works-with-strict-false/auth-works-with-strict-false.module';
import { AuthWorksModule } from 'src/auth-works/auth-works.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthWorksModule, AuthErrorModule, AuthWorksWithStrictFalseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
