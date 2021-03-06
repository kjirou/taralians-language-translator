# taralians-language-translator

[![npm version](https://badge.fury.io/js/taralians-language-translator.svg)](https://badge.fury.io/js/taralians-language-translator)
[![Build Status](https://travis-ci.org/kjirou/taralians-language-translator.svg?branch=master)](https://travis-ci.org/kjirou/taralians-language-translator)

A fictional "The Taralians Language"(タラール語) translator


## これは何？

初代ロマサガに登場する架空の言語である「タラール語」の翻訳機です。


## インストール

```
npm install -g taralians-language-translator
```


## 使い方
### 英語(English) to タラール語(Taralians)

```bash
taralians 'What is your name?'
ムアナ ウト ホオテ ラヘ?
```

もしくは、

```bash
taralians etot 'What is your name?'
ムアナ ウト ホオテ ラヘ?
```

### タラール語(Taralians) to 英語(English)

```bash
taralians ttoe '...ムエ...アメ...カヤキス! カヤキス レビタ!'
...who...are...black! black demon!
```

### `'` や `"` で括った文字は固有名詞として翻訳対象から除外される

```bash
taralians ttoe 'ウ アソ "ナイトハルト" チミタゲ エケ "ローザリア".'
i am "ナイトハルト" prince of "ローザリア".
```


## 参考リンク

- [アニヲタWiki(仮) タラール語](https://www49.atwiki.jp/aniwotawiki/pages/35560.html)
  - 翻訳ロジックはこちらの記事を参照しました。
- [ロマンシング サ・ガ](https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%9E%E3%83%B3%E3%82%B7%E3%83%B3%E3%82%B0_%E3%82%B5%E3%83%BB%E3%82%AC)
- [ロマンシング サガ ミンストレルソング](https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%9E%E3%83%B3%E3%82%B7%E3%83%B3%E3%82%B0_%E3%82%B5%E3%82%AC_-%E3%83%9F%E3%83%B3%E3%82%B9%E3%83%88%E3%83%AC%E3%83%AB%E3%82%BD%E3%83%B3%E3%82%B0-)


## 作った経緯

[モンスターハンターナイトハルト(MH:N)](http://dic.nicovideo.jp/a/mh%3An%28%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%8F%E3%83%B3%E3%82%BF%E3%83%BC%3A%E3%83%8A%E3%82%A4%E3%83%88%E3%83%8F%E3%83%AB%E3%83%88%29) シリーズが面白くて、支援コマンドを作りたい気持ちになった。
