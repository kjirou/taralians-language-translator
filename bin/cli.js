#!/usr/bin/env node

var parseArgs = require('minimist');
var parseCommands = require('minimist-subcommand');

var translator = require('..');

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
