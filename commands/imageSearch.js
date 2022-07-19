var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer:{
        headless: true
    }
})

exports.run = async (client, message, args) => {
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Please enter in an image name');
        image_message = await message.channel.send("Searching internet for \"" + image_query + "\", please wait...")
        const image_results = await google.scrape(image_query, 1);
        image_message.delete();
        message.channel.send("Image Results for \"" + image_query + "\" :")
        message.channel.send(image_results[0].url)
}