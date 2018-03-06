#!/usr/bin/env node
'use strict';

const meow = require('meow');
const keypress = require('keypress');
const wifi = require('../libs/wifi');

// keypress(process.stdin);
process.stdin.on('keypress', (ch, key) => {
  if (key && key.ctrl && key.name === 'c') {
    process.stdout.write('\nExit\n')
    process.exit(0);
  }
})

const cli = meow(`
    Usage
      $ office <input>

    Sub Command
      $ office wifi   Search SSID

    Options
      --filter, -f  Filter by

    Examples
      $ office wifi --filter=iptime
      🌈 unicorns 🌈
`, {
    flags: {
      filter: {
        type: 'string',
        alias: 'f'
      }
    }
});

wifi(cli.flags)

