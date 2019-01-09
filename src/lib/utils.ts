export const stringToArray = (str: string) => {
  return str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
};

const SINGLE_ALPHABET_TRANSLATION_LIST: Array<[string, string]> = [
  ['a', 'ア'],
  ['b', 'カ'],
  ['c', 'キ'],
  ['d', 'ク'],
  ['e', 'イ'],
  ['f', 'ケ'],
  ['g', 'コ'],
  ['h', 'サ'],
  ['i', 'ウ'],
  ['j', 'シ'],
  ['k', 'ス'],
  ['l', 'セ'],
  ['m', 'ソ'],
  ['n', 'タ'],
  ['o', 'エ'],
  ['p', 'チ'],
  ['q', 'ツ'],
  ['r', 'テ'],
  ['s', 'ト'],
  ['t', 'ナ'],
  ['u', 'オ'],
  ['v', 'ニ'],
  ['w', 'ヌ'],
  ['x', 'ネ'],
  ['y', 'ノ'],
  ['z', 'ハ'],
];

export const translateSingleAlphabet: (target: string) => string | null = (target) => {
  for (const [alphabet, text] of SINGLE_ALPHABET_TRANSLATION_LIST) {
    if (alphabet === target) {
      return text;
    }
  }
  return null;
};

const TWO_ALPHABETS_TRANSLATION_LIST: Array<[string, string]> = [
  ['ce', 'ゲ'],
  ['de', 'レ'],
  ['ea', 'ユ'],
  ['er', 'ヨ'],
  ['gr', 'ザ'],
  ['la', 'ヤ'],
  ['lo', 'モ'],
  ['me', 'ヘ'],
  ['mo', 'ビ'],
  ['na', 'ラ'],
  ['ne', 'リ'],
  ['pa', 'ル'],
  ['pl', 'フ'],
  ['re', 'メ'],
  ['ri', 'ミ'],
  ['yo', 'ホ'],
  ['wh', 'ム'],
];

export const translateTwoAlphabets: (target: string) => string | null = (target) => {
  for (const [alphabet, text] of TWO_ALPHABETS_TRANSLATION_LIST) {
    if (alphabet === target) {
      return text;
    }
  }
  return null;
};

export const translateSingleTaralians: (target: string) => string | null = (target) => {
  for (const [alphabet, text] of TWO_ALPHABETS_TRANSLATION_LIST) {
    if (text === target) {
      return alphabet;
    }
  }

  for (const [alphabet, text] of SINGLE_ALPHABET_TRANSLATION_LIST) {
    if (text === target) {
      return alphabet;
    }
  }

  return null;
};

export const TOKEN_TYPES = [
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

export const lexer = (text: string) => {
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
