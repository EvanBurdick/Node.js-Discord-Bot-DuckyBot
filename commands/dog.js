const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
exports.run = async (client, message, args) => {

    randomPuppy()
    .then(url => {
        message.channel.send(url);
    })
}
exports.info = async() => {
    return "Diaplays a random image of a dog";
}