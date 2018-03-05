const prompt = require('prompts');
const wifi = require('node-wifi');
const ora = require('ora');
const chalk = require('chalk');
const sigEmoji = require('../helpers/signal-level-emoji')

module.exports = (flags) => {
  const spinner = ora('Searching Best Wifi for You...').start();
  spinner.color = 'yellow';

  wifi.init({
    iface: null
  })

  wifi.scan(async (err, networks) => {
    if (err) {
      console.error(err);
      return;
    }

    let res = networks
      .sort((a, b) => b.signal_level - a.signal_level);

    if (flags.filter) {
      res = res.filter(net => net.ssid.indexOf(flags.filter) > -1)
    }

    res = res.map(net => {
      return {
        ...net,
        title: `${sigEmoji(net.signal_level)}  ${net.ssid}`,
        value: net.ssid
      }
    })

    spinner.stop();

    const choice = await prompt([
      {
        type: 'select',
        name: 'ssid',
        message: 'Pick a Wifi',
        choices: res
      },
      {
        type: 'password',
        name: 'password',
        message: 'Tell me wifi password',
        initial: '',
      }
    ]);

    spinner.text = `Connecting into ${choice.ssid} Wifi`;
    spinner.start();

    wifi.connect({ ssid : choice.ssid, password : choice.password }, function(err) {
      if (err) {
        console.log(err);
        throw err
      }

      spinner.succeed(`Connected ${choice.ssid} SSID`);
    });
  });
}