const botconfig = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true})
const client = new Discord.Client({disableEveryone: true})
bot.commands = new Discord.Collection();
let coins = require("./coins.json");
let xp = require("./xp.json");

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} has been loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
   console.log("All scripts are loaded!")
   console.log('NFR Bot is logged in!') 
   
      
   bot.user.setActivity("NFR Airways", {type: "watching"});
});
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("	#dd9af8")
  .addField("💸", `${coinAmt} coins added!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor("#dd9af8")
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
    let prefix = "-";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
    
});


bot.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find(`name`, "logs");

  let cicon = member.user.displayAvatarURL;
  let cEmbed = new Discord.RichEmbed()
  .setTitle("Member Joined, Welcome!", "")
  .setColor("#052a7a")
  .setThumbnail(cicon)
  .setDescription(`${member.user.tag} - Thank you for joining NFR!`)

 let dEmbed = new Discord.RichEmbed()
  .setTitle(`Welcome! ${member.user.tag}`)
  .setColor("#052a7a")
  .setThumbnail(cicon)
  .setDescription(`Thank you for joining NFR! and Enjoy your time here!\n` +
  "\n" +
  "For more information, Please read below.\n" +
  "\n" +
  `**Rules** - The Official Rules of NFR can be found in [#about](https://discord.com/channels/702073890439954515/707855212810862653)\n` +
  "**Help** - If you need any help, don't hesitate to ask a staff or in #command you can create a support-ticket by using -support.\n" +
  "[Our Links](https://discord.gg/GV6pvjw)")
  .setFooter("Welcome!", "https://t0.rbxcdn.com/0fbf295b9ca0b176adcc0f1cd4bc0617");
  if (!member)
  if (!channel) return;

  channel.send(cEmbed);
  member.send(dEmbed);
});

bot.on('messageReactionAdd', (messageReaction, user) => {

  const message = messageReaction.message;
  const member = message.guild.members.get(user.id);

  
  if(member.user.bot) return;
  let role = message.guild.roles.find(`name`, 'Verified');
  let qotd = message.guild.roles.find(`name`, 'QOTD');
  let development = message.guild.roles.find(`name`, `Development Ping`)

  if(messageReaction.emoji.name === "✅") {
      member.addRole(role.id);
      messageReaction.remove(member).catch(console.error);
    } 

    if(messageReaction.emoji.name === "🤔") {
      member.addRole(qotd.id);
      messageReaction.remove(member).catch(console.error);
    }
    
    if(messageReaction.emoji.name === "😮") {
      member.addRole(development.id);
      messageReaction.remove(member).catch(console.error);
    }




});


bot.login(botconfig.token);
