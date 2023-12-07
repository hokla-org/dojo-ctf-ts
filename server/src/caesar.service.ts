const alphabet = [...Array(26)].map(
  (_, i) => `${String.fromCharCode(i + 'a'.charCodeAt(0))}`,
);

function adjustedModulo(n: number, m: number) {
  return ((n % m) + m) % m;
}

function transformText(text: string, pad: number): string {
  return text
    .split('')
    .map((letter) => transformLetter(letter, pad))
    .join('');
}

function transformLetter(letter: string, pad: number): string {
  const index = alphabet.indexOf(letter);
  if (index !== -1) {
    const newIndex = adjustedModulo(index + pad, alphabet.length);
    return alphabet[newIndex];
  }

  return letter;
}

export function isTokenValid(token: string): boolean {
  return transformText(token, 5) === 'zxj dtzw ijgzlljw ;)';
}
