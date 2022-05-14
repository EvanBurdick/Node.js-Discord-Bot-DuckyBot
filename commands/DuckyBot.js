const Discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');
const {prefix} = require('../config.json');

exports.run = async (client, message, args,) => {
  let bicon = client.user.displayAvatarURL;  
  const embed = new RichEmbed()
    .setDescription('Bot Information')
    .setColor(0xFFFF00)
    .setThumbnail(bicon)
    .addField('DuckyBot is a multipurpose bot created by ΣVΛП#8270', ' ‏‏‎ ')
    .addField('You can use the command `'+prefix+'help` to get a list of usable commands.',' ‏‏‎ ')
  message.channel.send(embed);
}
exports.info = async() => {
  return "Diaplays information about this bot";
}