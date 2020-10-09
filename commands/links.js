const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to use this command!");
      const sayMessage = args.join(" ");
    
    let sicon = message.guild.iconURL;
    let msgEmbed = new Discord.RichEmbed()
    .setColor("#0000FF")
    .setThumbnail(sicon)
    .setDescription("\n" +
    "Twitter  - Soon\n" +
    "[Roblox Group Link](https://www.roblox.com/groups/6228159/NFR-Airways#!/about)\n" +
    "[Discord Server Link](https://discord.gg/GV6pvjw)\n" +
    "Youtube Channel - Soon")
    .setFooter(`${message.guild.name} Links.`, "https://t0.rbxcdn.com/0fbf295b9ca0b176adcc0f1cd4bc0617");
      message.delete().catch();
     
    message.channel.send(msgEmbed);

}

module.exports.help = {
    name: "links"
  }

