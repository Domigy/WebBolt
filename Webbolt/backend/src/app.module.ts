import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TermekekModule } from './termekek/termekek.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TermekekModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
