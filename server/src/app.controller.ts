import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { CaesarService } from './caesar.service';

@Controller()
export class AppController {
  constructor(private readonly appService: CaesarService) {}

  @Get('flag')
  getFlag(@Headers('token') token: string): string {
    if (!this.appService.isTokenValid(token)) {
      throw new UnauthorizedException('Invalid token');
    }

    return process.env.SECRET_FLAG ?? 'Flag_Not_Defined';
  }
}
