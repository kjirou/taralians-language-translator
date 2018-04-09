const {
  ONE_LETTER_OF_ALPHABET_T_TO_E,
  TOKEN_TYPES,
  TWO_LETTERS_OF_ALPHABET_T_TO_E,
  lexer,
  stringToArray,
} = require('./utils');

const translateWord = (word) => {
  const characters = stringToArray(word);
  let translatedWord = '';

  for (let characterIndex = 0; characterIndex < characters.length; characterIndex++) {
    const char = characters[characterIndex];
    translatedWord += TWO_LETTERS_OF_ALPHABET_T_TO_E[char] || ONE_LETTER_OF_ALPHABET_T_TO_E[char] || char;
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
