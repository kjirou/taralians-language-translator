#!/usr/bin/env node

var translator = require('.');

if (process.argv.length !== 3) {
  console.log('Usage: taralians <TEXT>');
  process.exit();
}
var text = process.argv[2];

console.log(translator.taraliansToEnglish.translate(text));
