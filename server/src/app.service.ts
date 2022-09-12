import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  isSecretValid(secret: string): boolean {
    return secret === '1234';
  }
}
