import * as assert from 'assert';
import {describe, it} from 'mocha';

import {translate} from '../../src/lib/english-to-taralians';

describe('lib/english-to-taralians', function() {
  describe('Example sentences', function() {
    [
      ['What is your name?', 'ムアナ ウト ホオテ ラヘ?'],
      ['I am ナイトハルト prince of ローザリア.', 'ウ アソ ナイトハルト チミタゲ エケ ローザリア.'],
      ['I am "ナイトハルト" prince of "ローザリア".', 'ウ アソ "ナイトハルト" チミタゲ エケ "ローザリア".'],
      ['...who...are...Black! Black demon!', '...ムエ...アメ...カヤキス! カヤキス レビタ!'],
      ["Save us 'ニーサ'、Save us 'エロール'。", "トアニイ オト 'ニーサ'、トアニイ オト 'エロール'。"],
    ].forEach(([source, translated]) => {
      it(`"${source}" => "${translated}"`, function() {
        assert.strictEqual(translate(source), translated);
      })
    });
  });
});
