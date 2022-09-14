import { Injectable } from '@nestjs/common';

@Injectable()
export class CaesarService {
  alphabet = [...Array(26)].map(
    (_, i) => `${String.fromCharCode(i + 'a'.charCodeAt(0))}`,
  );

  mod(n, m) {
    return ((n % m) + m) % m;
  }

  transformText(text: string, pad: number): string {
    return text
      .split('')
      .map((letter) => this.transformLetter(letter, pad))
      .join('');
  }

  transformLetter(letter: string, pad: number): string {
    const index = this.alphabet.indexOf(letter);
    if (index !== -1) {
      const newIndex = this.mod(index + pad, this.alphabet.length);
      return this.alphabet[newIndex];
    }

    return letter;
  }

  isTokenValid(token: string): boolean {
    return this.transformText(token, 5) === 'zxj dtzw ijgzlljw ;)';
  }
}
