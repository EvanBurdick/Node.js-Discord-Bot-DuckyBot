const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if(args =="info"){
        const emojiList = message.guild.emojis.cache.map((e, x) => `${x} = ${e} | ${e.name}`).join("\n");
        message.channel.send(emojiList);
    }
    else{
        const emojiList = message.guild.emojis.cache.map(emoji => emoji.toString()).join(" ");
        message.channel.send("You can also use `!emoji info` to get more information");
        message.channel.send((emojiList).replace(/,/g, ''));
    }
}
exports.info = async() => {
    return "Diaplays all added emojis in the server";
}