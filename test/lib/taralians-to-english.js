const assert = require('assert');
const {describe, it} = require('mocha');

const {translate} = require('../../src/lib/taralians-to-english');

describe('lib/taralians-to-english', function() {
  describe('Example sentences', function() {
    [
      ['ムアナ ウト ホオテ ラヘ?', 'what is your name?'],
      ['ウ アソ "ナイトハルト" チミタゲ エケ "ローザリア".', 'i am "ナイトハルト" prince of "ローザリア".'],
      ['...ムエ...アメ...カヤキス! カヤキス レビタ!', '...who...are...black! black demon!', ],
      ["トアニイ オト 'ニーサ'、トアニイ オト 'エロール'。", "save us 'ニーサ'、save us 'エロール'。"],
    ].forEach(([source, translated]) => {
      it(`"${source}" => "${translated}"`, function() {
        assert.strictEqual(translate(source), translated);
      })
    });
  });
});
