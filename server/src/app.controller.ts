import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { isTokenValid } from './caesar.service';

@Controller()
export class AppController {
  constructor() {}

  @Get('flag')
  getFlag(@Headers('token') token: string): string {
    if (!isTokenValid(token)) {
      throw new UnauthorizedException('Invalid token');
    }

    return process.env.SECRET_FLAG ?? 'Flag_Not_Defined';
  }
}
