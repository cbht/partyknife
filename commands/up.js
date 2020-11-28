const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = (bot, message, args) => {
    message.reply("I'm awake!");
}

module.exports.help = {
    name: "up",
    aliases: ["awake"],
}