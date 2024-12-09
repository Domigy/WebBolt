import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TermekekModule } from './termekek/termekek.module';

@Module({
  imports: [TermekekModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
