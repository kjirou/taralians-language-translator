/**
 * The translation logic is based on the following articles.
 *
 *   アニヲタWiki(仮)
 *   https://www49.atwiki.jp/aniwotawiki/pages/35560.html
 */

import {translate as translateEnglishToTaralians_} from './lib/english-to-taralians';
import {translate as translateTaraliansToEnglish_} from './lib/taralians-to-english';

export const translateEnglishToTaralians = translateEnglishToTaralians_;
export const translateTaraliansToEnglish = translateTaraliansToEnglish_;
