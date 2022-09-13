import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  isTokenValid(token: string): boolean {
    return token === '1234';
  }
}
