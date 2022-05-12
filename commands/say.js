const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    if(args.length!==0){
         let botmessage = args.join(" ");
          message.channel.send(botmessage);
         message.delete();
    }else{
        message.channel.send("Correct usage: ```!say <argument(s)>```");
    }

}
exports.info = async(client, message, args, ops) => {
    return "Speak a message through the bot!";
}