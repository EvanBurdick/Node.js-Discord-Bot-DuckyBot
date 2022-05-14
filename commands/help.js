const testFolder = './commands/';
const fs = require('fs');
const Discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  if(args == 0){
    let commands= "";
    fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
    if(file!== 'noPrefix.js') //do not include in list of commands (NOT A COMMAND)
      commands+=((file).substring(0, file.length - 3))+",";
    });
    commandsArr = commands.split(',');
  
    const embed = new RichEmbed()
      .setDescription('Bot Commands')
      .setColor(0xFFFF00)
      .addField(commandsArr,"‏‏‎", inline= true)
      .setFooter("Also use !help <command name> to learn about command.");
    message.channel.send(embed);
    });

  }
  else{
    try{
      console.log("test");
      let cmd = args.shift().toLowerCase();
      let commandFile = require(`./${cmd}.js`);
      let a = commandFile.info();
      a.then(function(a){
        if(a){ // if it is not undefined
          const embed = new RichEmbed()
          .setColor(0xFFFF00)
          .addField(cmd + ' command description:', a, true);
          message.channel.send(embed);
        }
      });
    }
    catch(e){
      message.channel.send("Correct usage: ```!help <command name>```");
      return;//exit command
    }
  } 
}
exports.info = async() => {
  return "Displays all of the available commands, or gives information about a command given the command name as an argument";
}