import {
  TOKEN_TYPES,
  lexer,
  stringToArray,
  translateSingleAlphabet,
  translateTwoAlphabets,
} from './utils';

/**
 * 変換ロジックは以下であるが、これが正しいかは不明。
 * 1)2文字アルファベットの置換ができる場所を、先頭から優先して探して置換
 * 2)残ったテキストを1文字アルファベットに置換
 */
const translateWord = (word: string) => {
  const characters = stringToArray(word);
  let translatedWord = '';

  for (let characterIndex = 0; characterIndex < characters.length; characterIndex++) {
    const currentChar = characters[characterIndex]
    const nextChar = characters[characterIndex + 1];

    if (nextChar !== undefined) {
      const twoChars = currentChar + nextChar;
      const matchedTwoChars = translateTwoAlphabets(twoChars.toLowerCase());
      if (matchedTwoChars !== null) {
        translatedWord += matchedTwoChars;
        characterIndex++;
        continue;
      }
    }

    translatedWord += translateSingleAlphabet(currentChar.toLowerCase()) || currentChar;
  }

  return translatedWord;
};

export const translate = (text: string) => {
  const tokens = lexer(text);

  const translatedWords = tokens
    .map(({type, text}) => type === 'word' ? translateWord(text) : text);

  return translatedWords.join('');
};
