import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
    imports:[PrismaModule],
    providers:[PrismaService]
})
export class PrismaModule {}
