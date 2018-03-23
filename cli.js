#!/usr/bin/env node

const {translate} = require('.');

if (process.argv.length !== 3) {
  console.log('Usage: taralians <TEXT>');
  process.exit();
}
let text = process.argv[2];

console.log(translate(text));
