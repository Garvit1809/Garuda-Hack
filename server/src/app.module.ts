import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CareersModule } from './careers/careers.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [AuthModule, CareersModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
