const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let idea = args.join(" ");

    let ideasEmbed = new Discord.RichEmbed()
    .setTitle(`suggestion By ${message.author.tag}`)
    .setColor(0xffffff)
    .addField("Suggestion:", idea)
    .setTimestamp(message.createdAt)
    .setFooter("Created by NFR Developers");

    let ideaschannel = message.guild.channels.find(`name`, "suggestions");
    if(!ideaschannel) return message.channel.send("Couldn't find ideas channel");
    
    let msg = await ideaschannel.send(ideasEmbed);

    await msg.react('✅'); 
    await msg.react('❎');

    message.delete({timeout: 1000});
}

module.exports.help = {
    name: "suggest"
  }
  