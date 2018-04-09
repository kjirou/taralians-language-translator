const assert = require('assert');
const {describe, it} = require('mocha');

const {translate} = require('../../lib/taralians-to-english');

describe('lib/taralians-to-english', function() {
  describe('Verification of historical facts', function() {
    [
      ['ムアナ ウト ホオテ ラヘ?', 'what is your name?'],
      //['ウ アソ ナイトハルト チミタゲ エケ ローザリア.', 'i am ナイトハルト prince of ローザリア.'],
      ['...ムエ...アメ...カヤキス! カヤキス レビタ!', '...who...are...black! black demon!', ],
    ].forEach(([source, translated]) => {
      it(`"${source}" => "${translated}"`, function() {
        assert.strictEqual(translate(source), translated);
      })
    });
  });
});
