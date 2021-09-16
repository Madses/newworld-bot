require('dotenv').config();
const Discord = require('discord.js');
const {Intents} = Discord;
const bot = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const TOKEN = process.env.TOKEN;
bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

const prefix = "!";

bot.on('message' , message => {
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + "find-actives")) {
        message.channel.send("checking for actives");
    } 

    console.log(message.content)
})