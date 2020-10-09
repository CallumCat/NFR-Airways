const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {

    let msg = await message.channel.send("Generating...")

    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json()).then(body => {
        if(!body) return message.channel.send("Error! Please try again..")
  

      let cEmbed = new Discord.RichEmbed()
      .setTitle("Dog")
      .setColor("#0000FF")
      .setImage(body.message)
      .setFooter("Created by NFR Developers");

      message.channel.send(cEmbed);
      msg.delete();

    })

}

module.exports.help = {
    name:"dog"
  }
