const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '.ping') {
    msg.reply('Pong!');
  }
});

client.login('NzgxMjkzNzgwODEyODI0NjA4.X77iiQ._9IW1nR89kaqu0p99Wqzk2_CZDU');