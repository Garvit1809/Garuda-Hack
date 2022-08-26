import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CareersModule } from './careers/careers.module';

@Module({
  imports: [AuthModule, CareersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
