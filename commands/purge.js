const Discord = require('discord.js');
const {prefix, token} = require('../config.json');

exports.run = async (client, message, args) => {
    message.channel.send("WIP");
   
   /*
        message.channel.send('You do not have permission to use this command');
        return; 

    if (isNaN(args[0])) {
         message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>'); 
         return;
    }
    message.delete();
    const fetched = await message.channel.fetchMessages({limit: args[0]})
            console.log(fetched.size + ' messages found, deleting...');

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); 
  */              
}
exports.info = async(client, message, args, ops) => {
    return "WIP";
}