const TelegramBot = require('node-telegram-bot-api');

//TODO: move it to .env file
const TOKEN = "6108121816:AAEZtFuxmXMW2jhRnqOgvyN-gpd-PqIQuOI";

const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg);
  
    bot.sendMessage(chatId, `${msg.text}`);
  });