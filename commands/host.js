
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission to use this command.");
      const msg = args.join(" ");
      let announcement = message.guild.channels.find(`name`, "events");
      message.delete().catch();
      let sEmbed = new Discord.RichEmbed()
      .setAuthor(`Event Hosted by ${message.author.username}`, message.guild.iconURL)
      .setDescription(msg)
      .setColor("#0000FF")
      .setFooter("Flight Planner")
      .setImage("")
      announcement.send(sEmbed);

}

module.exports.help = {
  name: "host"
}