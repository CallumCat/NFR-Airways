

    
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setColor("#0000FF")
    .setAuthor("Prefix", message.guild.iconURL)
    .setDescription("The prefix is **- or !**");

    message.channel.send(botembed)

}

module.exports.help = {
  name:"prefix"
}
