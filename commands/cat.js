const Discord = require('discord.js');
const SomeRandomCat = require('some-random-cat').Random;

exports.run = async (client, message, args) => {
SomeRandomCat.getCat() 
    .then(cat => {
        message.channel.send(cat.url);
    })
    .catch(e => {
        console.error(e);
        return;
    });    
}
exports.info = async(client, message, args, ops) => {
    return "Diaplays a random image of a cat";
}