const reverseWordUseCase = (wordToReverse: string) => {
  let result: string = '';

  for (let i = wordToReverse.length - 1; i >= 0; i--) {
    const currChar = wordToReverse[i];
    if (isVowel(currChar)) {
      result += currChar.toUpperCase();
    } else {
      result += currChar;
    }
  }

  return result
};

const isVowel = (c: string) => {
  return 'AEIOUaeiou'.indexOf(c) != -1;
};

export default reverseWordUseCase;
