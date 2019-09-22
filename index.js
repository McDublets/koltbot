const Commando = require('discord.js-commando')
const bot = new Commando.Client
const TOKEN = ''
const prefix = "!";
var version = '2.0.0';
bot.registry.registerGroup('simple', 'Simple')
bot-registry.registerDefaults();
bot.registry.registerCommandIn(_dirname + '/commands');

// Bot startup
bot.on('ready', () => {
  
    // What is the bot currently playing?
    bot.user.setActivity('Doing Bot Stuff.');
    
    // Posts on the console when bot is launched
    console.log('Varsku Her! Da er jeg på!');
  }); // End of start procedure

  
  bot.on('message', message=>{
      if(message.content =='Hi')
      {
        message.channel.sendMessage('Hi,'+message.author + ', Welcome to the server!')
      }
    });
  bot.login(TOKEN)
