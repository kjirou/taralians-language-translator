#!/usr/bin/env node

var fs = require('fs');
var parseArgs = require('minimist');
var parseCommands = require('minimist-subcommand');
var path = require('path');

var translator;

if (fs.existsSync(path.join(__dirname, '../dist/index.js'))) {
  translator = require('../dist');
} else {
  require('../setup/ts-node-reigister-for-cli-debug');
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
  console.log(translator.translateEnglishToTaralians(text));
} else if (subCommand === 'ttoe') {
  console.log(translator.translateTaraliansToEnglish(text));
}
