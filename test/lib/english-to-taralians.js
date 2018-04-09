const assert = require('assert');
const {describe, it} = require('mocha');

const {translate} = require('../../lib/english-to-taralians');

describe('lib/english-to-taralians', function() {
  describe('Verification of historical facts', function() {
    [
      ['What is your name?', 'ムアナ ウト ホオテ ラヘ?'],
      ['I am ナイトハルト prince of ローザリア.', 'ウ アソ ナイトハルト チミタゲ エケ ローザリア.'],
      ['...who...are...Black! Black demon!', '...ムエ...アメ...カヤキス! カヤキス レビタ!'],
    ].forEach(([source, translated]) => {
      it(`"${source}" => "${translated}"`, function() {
        assert.strictEqual(translate(source), translated);
      })
    });
  });
});
