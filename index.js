const keep_alive = require('./keep_alive.js')
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;
const prefix = "^";


client.on('ready', () => {
  console.log("Ready");
  console.log("- " + client.user.username);
  client.user.setActivity("the chat", {
    type: "WATCHING",
    //url: "https://www.twitch.tv/example-url"
  });
});

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.channel.send(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  if (command === "support") {
    message.channel.send(`https://discord.gg/KB6bwYq`);
  }
    
  if (command === "invite") {
    message.channel.send(`You can invite me at: https://discord.com/oauth2/authorize?client_id=660941887901007940&scope=bot&permissions=8`);
  }
  
  // Utility Commands
  if (command === "clear") {
    message.channel.send("This Feature Is Coming Soon!")
  }

  if (command === "roll") {
    const numArgs = args.map(x => parseFloat(x));
    const roll = (Math.ceil(Math.random() * numArgs))
    message.reply(`You rolled ${roll}!`);
  }

  if (command === "coin") {
    const flip = (Math.ceil(Math.random() * 2))
    if (flip === 2) {
      message.reply(`Heads!`);
    } else {
      message.reply(`Tails!`);
    }
  }

  else if (command === "add") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`That equals ${sum}!`);
  }
});

// auto responses
client.on("message", function(message) {
  if (message.author.bot) return;
  
  if (message.content.match("heck")) {
    message.channel.send("WATCH YOUR LANGUAGE 😡😡😡😡😡😡😡😡");
  }
  
  if (message.content.match("kip")) {
    message.channel.send("Hello");
  }
  
  if (message.content.match("gamer")) {
    message.channel.send("no");
  }
  if (message.content.match("hi")) {
    message.channel.send("Hello There");
  }
});



client.login(token);