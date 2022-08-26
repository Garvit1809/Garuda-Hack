import { Module } from '@nestjs/common';
import { MentorsService } from './mentors.service';
import { MentorsController } from './mentors.controller';

@Module({
  controllers: [MentorsController],
  providers: [MentorsService]
})
export class MentorsModule {}
