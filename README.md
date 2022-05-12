# Discord Bot (DuckyBot) made in Node.js
*By: @EvanBurdick*
(ΣVΛП#8270 on discord)

## Introduction
DuckyBot is a multi-purpose bot designed to make adding extra functionality as easy as possible. It is ran in a node.js terminal locally, but can easily be put on a server for 24/7 uptime.

## Setup
First, set up the bot profile using Discord's [devloper portal](https://discord.com/developers/applications). Select "New Application", and pick a name for the bot. 

Then, you can change the bot's information, including the description, tags, and more.

Copy the public key, and paste it into the config.json file, under the "token" field. Replace the "XXX" in the field with the copied key. In that same file, you can pick a prefix for your bot's commands as well, but make sure to limit it to a single character. If you have multiple bots in your server, you are going to want to pick a prefix that is not already taken by another bot.

## Inviting the bot to server
In order to get the bot in your server, go to the developer portal and choose your bot's application. 

Go to the "Bot" tab and Click the "Add Bot" button under build-a-bot.

Then, under the OAuth2 tab, go to the URL Generator section. Under Scopes, select the "bot" option. A bot permissions field will appear underneath, and select "administrator". If you want the bot to be limited with it's permissions, you can instead manually select the options you wish. 

Once finished, click the Copy button under Generated URL. Paste this into a browser URL and then select the server for the bot to join.

If you have done everything correctly, you should now see your bot in the discord server. (should be offline at this point)

## Starting the bot
Using a node.js terminal ([download](https://nodejs.org/en/download/)), change the current directory to wherever you stored the files. Then, run the following command: ```node index.js```. At this point, you will see a message in the terminal indicating the bot is ready. The bot is now running, and you should see the bot change from offline to online in the server!

## Adding Commands
- Prefix Commands:
   - Add the name of the command as a .js file in the "commands" folder. (for example, the "help" command is "help.js" in the commands folder. Then, you can add functionality to the file. (I reccommend following the commandTemplate.js file which I have included).

- Non Prefix Command:
   - Go to the noPrefix.js file in the commands folder. Add your command functionality in the switch method. 

## Some added Commands 
Note: You can remove commands that you do not want by simply deleting the .js file for the command in the commands folder.
(all commands below are assuming the prefix is set to '!')

- ascii (prints message in ascii bubble characters) 
   - usage: ```!ascii <message>```
- cat (sends a random image of a cat)
   - usage: ```!cat```
- dog (sends a random image of a dog)
   - usage: ```!dog```
- DuckyBot (prints information about the bot)
   - usage: ```!duckybot```
- emoji (prints a list of all of the server's added emojis)
   - usage: ```!emoji``` or ```!emoji list```
- help (displays a list of the bot's commands)
   - usage: ```!help``` or ```!help <command name>```
- say (display's a message as if the bot had said it)
   - usage: ```!say <message>```
- server (displays information about the server)
   - usage: ```!server```
- weather (displays weather information given a location as an argument)
   - usage: ```!weather <location>```
