const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("Server Membercount")
    .setDescription("\n" + 
    `**Server Name** - ${message.guild.name}\n` +
    `**Total Members** - ${message.guild.memberCount}`)
    .setColor("#0000FF")
    .setThumbnail(sicon)
    .setTimestamp(message.guild.createdAt)
    .setFooter("Created by NFR Developers");
    message.channel.send(serverembed);
}

module.exports.help = {
  name:"membercount"
}
