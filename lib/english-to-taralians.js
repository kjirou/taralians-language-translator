const {
  ONE_LETTER_OF_ALPHABET_E_TO_T,
  TWO_LETTERS_OF_ALPHABET_E_TO_T,
  stringToArray,
} = require('./utils');

const TOKEN_TYPES = [
  {
    type: 'word',
    pattern: /^[^\s]+/,
  },
  {
    type: 'spaces',
    pattern: /^\s+/,
  },
];

const lexer = (text) => {
  const tokens = [];
  let restText = text;

  while (restText !== '') {
    let analyzeSuccessed = false;
    for ({pattern, type} of TOKEN_TYPES) {
      const matched = pattern.exec(restText);
      if (matched !== null) {
        restText = restText.replace(pattern, '');
        analyzeSuccessed = true;
        tokens.push({
          type,
          text: matched[0],
        });
        break;
      }
    }

    if (analyzeSuccessed === false) {
      throw new Error('Lexical analysis failed. This is an unexpected error.');
    }
  }

  return tokens;
};

/**
 * 変換ロジックは以下であるが、これが正しいかは不明。
 * 1)2文字アルファベットの置換ができる場所を、先頭から優先して探して置換
 * 2)残ったテキストを1文字アルファベットに置換
 */
const translateWord = (word) => {
  const characters = stringToArray(word);
  let translatedWord = '';

  for (let characterIndex = 0; characterIndex < characters.length; characterIndex++) {
    const currentChar = characters[characterIndex]
    const nextChar = characters[characterIndex + 1];

    if (nextChar !== undefined) {
      const twoChars = currentChar + nextChar;
      const matchedTwoChars = TWO_LETTERS_OF_ALPHABET_E_TO_T[twoChars.toLowerCase()];
      if (matchedTwoChars !== undefined) {
        translatedWord += matchedTwoChars;
        characterIndex++;
        continue;
      }
    }

    translatedWord += ONE_LETTER_OF_ALPHABET_E_TO_T[currentChar.toLowerCase()] || currentChar;
  }

  return translatedWord;
};

const translate = (text) => {
  const tokens = lexer(text);

  const translatedWords = tokens
    .map(({type, text}) => type === 'word' ? translateWord(text) : text);

  return translatedWords.join('');
};

module.exports = {
  _lexer: lexer,
  _translateWord: translateWord,
  translate,
};