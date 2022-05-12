const Discord = require('discord.js');

exports.run = async (message) => {
    let msg = message.content.toUpperCase();

    switch(msg){
    case 'F':
        message.channel.send('F');
        break;
    case 'TEST':
        message.channel.send("testing!");
        break;
    case 'PING':
        message.channel.send("pong");
        break;
    default:
    }

}
exports.info = async(client, message, args, ops) => {
    return; //not meant to be displayed as a command
}