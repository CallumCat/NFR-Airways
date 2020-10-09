const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission to use this command.");
      const msg = args.join(" ");
      let announcement = message.guild.channels.find(`name`, "announcements");
      message.delete().catch();
      let sEmbed = new Discord.RichEmbed()
      .setAuthor(`Announced by ${message.author.username}`, message.guild.iconURL)
      .setDescription(msg)
      .setColor("#0000FF")
      .setFooter("Announcements")
      announcement.send(sEmbed);

}

module.exports.help = {
  name: "announce"
}
