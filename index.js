const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();
const prefixlessCommand = require('./commands/noPrefix.js');


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
		try{
		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, message, args);
		} catch(e) {
		console.log(e.message);
		}finally{
		console.log(`${message.author.tag} ran the command ${cmd}`);
		}
	}
	else{ //see if the message contains a prefix-less command
		prefixlessCommand.run(message);
	}
})

client.login(token);

