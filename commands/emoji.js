const Discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if(args =="info"){
        const emojiList = message.guild.emojis.map((e, x) => ('ID: '+ x + ' = ' + e) + ' | ' +e.name).join('\n');
        message.channel.send(emojiList);
    }
    else{
    const emojiList = message.guild.emojis.map((e) => (e)).join();
    message.channel.send("You can also use `!emoji info` to get more information");
        message.channel.send((emojiList).replace(/,/g, ''));
    }
}
exports.info = async(client, message, args, ops) => {
    return "Diaplays all added emojis in the server";
}