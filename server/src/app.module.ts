import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CaesarService } from './caesar.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CaesarService],
})
export class AppModule {}
