import { Module } from '@nestjs/common';
import { CareersService } from './careers.service';
import { CareersController } from './careers.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CareersController],
  providers: [CareersService, PrismaService]
})
export class CareersModule {}
