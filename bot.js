const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.Mjc2NDEyMzAyMTIxNzYyODI4.DMdP-g.KnbCm6xBL2YvqqyufYcYHRo2Tks
);
