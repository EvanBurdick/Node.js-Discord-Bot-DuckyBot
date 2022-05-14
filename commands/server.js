const Discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    const owner = await client.fetchUser(message.guild.ownerID);
    let sender = message.author;
    const embed = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setColor(0xFFFF00)
  .setDescription(`Owner: ${owner.toString()}`)
  .addField('Member Count', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} (${message.guild.members.filter(m=>m.user.bot).size} bots)`, true)
  .addField('AFK Timeout', `${message.guild.afkTimeout / 60} minutes`, true)
  .addField('AFK Channel', `${message.guild.afkChannelID === null ? 'No AFK Channel' : client.channels.get(message.guild.afkChannelID).name} (${message.guild.afkChannelID === null ? '' : message.guild.afkChannelID})`, true)
  .addField('Created', message.guild.createdAt.toLocaleString(), true)
  .addBlankField(true)
  .setTimestamp()
  .setFooter(sender.username, sender.avatarURL);

  message.channel.send({embed});
}
exports.info = async() => {
    return "Diaplays information about the server";
} 
