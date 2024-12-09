import { Module } from '@nestjs/common';
import { TermekekService } from './termekek.service';
import { TermekekController } from './termekek.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TermekekController],
  providers: [TermekekService, PrismaService],
})
export class TermekekModule {}
