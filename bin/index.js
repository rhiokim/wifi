#!/usr/bin/env node
'use strict';

const meow = require('meow');
const wifi = require('../libs/wifi');

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
      'auto-connect': {
        type: 'boolean',
        alias: 'a',
        default: false
      },
      filter: {
        type: 'string',
        alias: 'f'
      },
      sort: {
        type: 'string',
        alias: 's',
        default: 'desc'
      }
    }
});

switch(cli.input[0]) {
  case 'git':
  break;
  case 'wifi':
    wifi(cli.flags)
  break;
}

