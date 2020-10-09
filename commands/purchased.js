const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setTitle(`Purchased class tickets by ${message.author.tag}\n` + 
"You don't own any class ticket!")
.setColor("#0000FF");
    
    message.channel.send(botembed)

}

module.exports.help = {
  name:"purchased"
}
