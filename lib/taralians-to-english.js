const {
  ONE_LETTER_OF_ALPHABET_T_TO_E,
  TWO_LETTERS_OF_ALPHABET_T_TO_E,
  stringToArray,
} = require('./utils');

const TOKEN_TYPES = [
  {
    type: 'properName',
    pattern: /^('[^']+?'|"[^"]+?")/,
  },
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
