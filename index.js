/**
 * The translation logic is based on the following articles.
 *
 *   アニヲタWiki(仮)
 *   https://www49.atwiki.jp/aniwotawiki/pages/35560.html
 */

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
