import { Module } from '@nestjs/common';
import { MentorsService } from './mentors.service';
import { MentorsController } from './mentors.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MentorsController],
  providers: [MentorsService, PrismaService]
})
export class MentorsModule {}
