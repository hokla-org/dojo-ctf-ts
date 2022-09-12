import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('flag')
  getFlag(@Headers('secret') secret: string): string {
    if (!this.appService.isSecretValid(secret)) {
      throw new UnauthorizedException('Invalid secret');
    }

    return process.env.SECRET_FLAG ?? 'Flag_Not_Defined';
  }
}
