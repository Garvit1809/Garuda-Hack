import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CareersModule } from './careers/careers.module';
import { EventsModule } from './events/events.module';
import { MentorsModule } from './mentors/mentors.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    AuthModule, CareersModule, EventsModule, MentorsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
