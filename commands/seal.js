const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {

    let msg = await message.channel.send("Generating...")

    fetch(`https://apis.duncte123.me/seal`)
    .then(res => res.json()).then(body => {
        if(!body) return message.channel.send("Error! Please try again..")
  

      let cEmbed = new Discord.RichEmbed()
      .setTitle("Heres a photo of a seal")
      .setColor("#0000FF")
      .setImage(body.data.file)

      message.channel.send(cEmbed);
      msg.delete();

    })

}

module.exports.help = {
    name: "seal"
  }
