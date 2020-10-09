const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {

    let msg = await message.channel.send("Generating...")

    fetch(`https://apis.duncte123.me/meme`)
    .then(res => res.json()).then(body => {
        if(!body) return message.channel.send("Error! Please try again..")
  

      let cEmbed = new Discord.RichEmbed()
      .setTitle("Meme")
      .setColor("#0000FF")
      .setImage(body.data.image)
      .setFooter("Created by NFR Developers");

      message.channel.send(cEmbed);
      msg.delete();

    })

}

module.exports.help = {
    name:"meme"
  }
