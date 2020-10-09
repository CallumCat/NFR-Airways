const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission to use this command.");
    let vEmbed = new Discord.RichEmbed()
    .setAuthor("Reaction Role", message.guild.iconURL)
    .setColor("#0000FF")
    .setDescription("If you want to be part of QOTD or Development Updates.");
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry pal, you can't do that bitch.");
    message.channel.send(vEmbed).then(async msg => {
        await msg.react("🤔");
        await msg.react("😮");
     });
    
}


    
module.exports.help = {
    name: "rr"
  }
  
