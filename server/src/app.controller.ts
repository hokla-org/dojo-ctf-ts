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
  getFlag(@Headers('token') token: string): string {
    if (!this.appService.isTokenValid(token)) {
      throw new UnauthorizedException('Invalid token');
    }

    return process.env.SECRET_FLAG ?? 'Flag_Not_Defined';
  }
}
