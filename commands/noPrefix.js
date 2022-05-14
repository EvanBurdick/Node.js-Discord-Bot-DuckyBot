const Discord = require('discord.js');

exports.run = async (message) => {
    let msg = message.content.toUpperCase();

    ///////////////////////////
    //    Secret "Commands"  //
    ///////////////////////////
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

    //////////////////////
    //  Filter Words    //
    //////////////////////
    var profanities = ["BADWORD", "FRICK"];
    for (x = 0; x < profanities.length; x++) {
        if (msg.includes(profanities[x])){
            await message.reply("You cannot say that here!");     
            message.delete();
        }
    }
}
exports.info = async() => {
    return; //not meant to be displayed as a command
}