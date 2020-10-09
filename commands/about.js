
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission to use this command.");
      const msg = args.join(" ");
      let announcement = message.guild.channels.find(`name`, "about");
      message.delete().catch();
      let sEmbed = new Discord.RichEmbed()
      .setAuthor(`Info by ${message.author.username}`, message.guild.iconURL)
      .setDescription(msg)
      .setColor("#0000FF")
      .setFooter("Main Info About NFR")
      .setImage("https://cdn.discordapp.com/attachments/707855212810862653/718473771463213146/banner.png")
      announcement.send(sEmbed);

}

module.exports.help = {
  name: "about"
}
