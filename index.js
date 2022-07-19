const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const prefixlessCommand = require('./commands/noPrefix.js');
const fs = require('fs')

client.once('ready', () => { 
	console.log('Ready!')
})
client.on('message', message => {
	
	if(message.author.bot) return; //ignore all of the bot's messages
	console.log(`${message.author.tag}: `+message.content); //write user's message in console

	let msg = message.content.toUpperCase();
	let sender = message.author;
    let args = message.content.slice(prefix.length).trim().split(' '); //split up message into arguments following the prefix
	let cmd = args.shift().toLowerCase(); //first arg is the command name, and then remove it from args list

		////////////////////////////////////////
		//          Command Handler           //
		////////////////////////////////////////

	if (msg.startsWith(prefix)) {
		let path = `./commands/${cmd}.js`;
		fs.access(path, fs.F_OK, (err) => {
		if (err) { //that command file does not exist
			message.channel.send("That command does not exist");
			return;
		}
		try{
			let commandFile = require(path);
			commandFile.run(client, message, args);
		} 
		catch(e) {
			console.log(e.message);
		}
		finally{
			console.log(`${message.author.tag} ran the command ${cmd}`);
		}
		})
	}
	
	else{ //see if the message contains a prefix-less command (also checks for language filter)
		prefixlessCommand.run(message);
	}
})

client.login(token);

