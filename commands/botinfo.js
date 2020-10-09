const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
   let sembed = new Discord.RichEmbed()
   .setDescription("\n" +
   "\n" +
   "\n" +
    `**Bot Name** - ${bot.user.username}\n` +
    "**Created by** - NFR Developers")
   .setColor("#0000FF")
   .setThumbnail(bot.user.displayAvatarURL)
   .setFooter(`Bot Information.`, "https://t0.rbxcdn.com/0fbf295b9ca0b176adcc0f1cd4bc0617");
   message.channel.send(sembed);  
}
      
module.exports.help = {
  name:"botinfo"
}
