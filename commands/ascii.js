const Discord = require('discord.js');
const ascii = require('ascii-art');

exports.run = async (client, message, args, ops) => {
    if(args.length!==0){

    ascii.font(args.join(' '), 'Doom', function(rendered){
        rendered = rendered.trimRight();

        if(rendered.length > 2000) return message.channel.send('Sorry, that message is too long!');

        message.channel.send(rendered, { code: 'md'
        });
    });
    }else{
    message.channel.send("Correct usage: ```!ascii <argument>```");
    }   
}
exports.info = async(client, message, args, ops) => {
return "Displays message in an ascii font!";
}