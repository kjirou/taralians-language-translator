#!/usr/bin/env node

var fs = require('fs');
var parseArgs = require('minimist');
var parseCommands = require('minimist-subcommand');
var path = require('path');

var translator;

if (fs.existsSync(path.join(__dirname, '../dist/index.js'))) {
  translator = require('../dist');
} else {
  require('babel-register');
  translator = require('../src');
}

var parsedCommandsAndArgv = parseCommands(
  {
    default: 'etot',
    commands: {
      etot: null,
      ttoe: null
    }
  },
  process.argv.slice(2)
);

var subCommand = parsedCommandsAndArgv.commands[0];
var text = parsedCommandsAndArgv.argv[0] || '';

if (subCommand === 'etot') {
  console.log(translator.englishToTaralians.translate(text));
} else if (subCommand === 'ttoe') {
  console.log(translator.taraliansToEnglish.translate(text));
}
