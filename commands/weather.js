const Discord = require('discord.js');
var weather = require('weather-js');
const { Client, RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

    if(args ==""){
        message.channel.send("Correct usage: ```!weather <location>```");
    }else{
    weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        try {
            if(result.length === 0) {
            message.channel.send('**Please enter a valid location**');
            return;
        }
    } catch(error) {
        message.channel.send('**Please enter a location**');
        return;
    }
       
        var current = result[0].current;
        var location = result[0].location;

        const embed = new Discord.RichEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(0xFFFF00)
            .addField('Timezone',`UTC${location.timezone}`, true)
            .addField('Temperature',`${current.temperature}°F`, true)
            .addField('Feels Like',`${current.feelslike}°F`, true)
            .addField('Winds',`${current.winddisplay}`, true)
            .addField('Humidity',`${current.humidity}%`, true)
            
            message.channel.send(embed);
        })
        
    }
    
}
exports.info = async() => {
    return "Diaplays weather information given a location!";
}
