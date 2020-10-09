const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission to use this command.");
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    
    message.guild.member(kUser).send(kReason);
}


module.exports.help = {
    name:"dm"
  }
