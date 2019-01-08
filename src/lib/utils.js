const stringToArray = (string) => {
  return string.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
};

const inverseObject = (obj) => {
  const inversed = Object.keys(obj)
    .map(key => [key, obj[key]])
    .reduce((m, pair) => {
      m[pair[1]] = pair[0];
      return m;
    }, {});

  if (Object.keys(obj).length !== Object.keys(inversed).length) {
    throw new Error('The same key exists and lost information.');
  }

  return inversed;
};

const ONE_LETTER_OF_ALPHABET = {
  a: 'ア',
  b: 'カ',
  c: 'キ',
  d: 'ク',
  e: 'イ',
  f: 'ケ',
  g: 'コ',
  h: 'サ',
  i: 'ウ',
  j: 'シ',
  k: 'ス',
  l: 'セ',
  m: 'ソ',
  n: 'タ',
  o: 'エ',
  p: 'チ',
  q: 'ツ',
  r: 'テ',
  s: 'ト',
  t: 'ナ',
  u: 'オ',
  v: 'ニ',
  w: 'ヌ',
  x: 'ネ',
  y: 'ノ',
  z: 'ハ',
};
const ONE_LETTER_OF_ALPHABET_E_TO_T = ONE_LETTER_OF_ALPHABET;
const ONE_LETTER_OF_ALPHABET_T_TO_E = inverseObject(ONE_LETTER_OF_ALPHABET);

const TWO_LETTERS_OF_ALPHABET = {
  ce: 'ゲ',
  de: 'レ',
  ea: 'ユ',
  er: 'ヨ',
  gr: 'ザ',
  la: 'ヤ',
  lo: 'モ',
  me: 'ヘ',
  mo: 'ビ',
  na: 'ラ',
  ne: 'リ',
  pa: 'ル',
  pl: 'フ',
  re: 'メ',
  ri: 'ミ',
  yo: 'ホ',
  wh: 'ム',
};
const TWO_LETTERS_OF_ALPHABET_E_TO_T = TWO_LETTERS_OF_ALPHABET;
const TWO_LETTERS_OF_ALPHABET_T_TO_E = inverseObject(TWO_LETTERS_OF_ALPHABET);

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
    for (const {pattern, type} of TOKEN_TYPES) {
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

module.exports = {
  ONE_LETTER_OF_ALPHABET_E_TO_T,
  ONE_LETTER_OF_ALPHABET_T_TO_E,
  TOKEN_TYPES,
  TWO_LETTERS_OF_ALPHABET_E_TO_T,
  TWO_LETTERS_OF_ALPHABET_T_TO_E,
  lexer,
  stringToArray,
};
