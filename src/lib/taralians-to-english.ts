import {
  TOKEN_TYPES,
  lexer,
  stringToArray,
  translateSingleTaralians,
} from './utils';

const translateWord = (word: string) => {
  const characters = stringToArray(word);
  let translatedWord = '';

  for (let characterIndex = 0; characterIndex < characters.length; characterIndex++) {
    const char = characters[characterIndex];
    translatedWord += translateSingleTaralians(char) || char;
  }

  return translatedWord;
};

export const translate = (text: string) => {
  const tokens = lexer(text);

  const translatedWords = tokens
    .map(({type, text}) => type === 'word' ? translateWord(text) : text);

  return translatedWords.join('');
};
