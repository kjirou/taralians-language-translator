/**
 * The translation logic is based on the following articles.
 *
 *   アニヲタWiki(仮)
 *   https://www49.atwiki.jp/aniwotawiki/pages/35560.html
 */

const englishToTaralians: any = require('./lib/english-to-taralians');
const taraliansToEnglish: any = require('./lib/taralians-to-english');

module.exports = {
  englishToTaralians,
  taraliansToEnglish,
};
