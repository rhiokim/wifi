const prompt = require('prompts');
const wifi = require('node-wifi');
const ora = require('ora');
const chalk = require('chalk');

const spinner = ora('Searching Best Wifi for You...').start();
spinner.color = 'yellow';

wifi.init({
  iface: null
})

wifi.scan((err, networks) => {
  if (err) {
    console.error(err);
    return;
  }

  let res = networks
    .sort((a, b) => a.signal_level - b.signal_level);

  spinner.succeed('Changing SSID for Your Machine');

  res = res.map(net => {
    return {
      ...net,
      title: `${net.ssid} ${chalk.grey(net.signal_level)}`,
      value: net.ssid
    }
  })

  const response = prompt({
    type: 'select',
    name: 'value',
    message: 'Pick a Wifi',
    choices: res
  });

});
