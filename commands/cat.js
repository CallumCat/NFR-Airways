const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {

    let msg = await message.channel.send("Generating...")

    fetch(`http://aws.random.cat/meow`)
    .then(res => res.json()).then(body => {
        if(!body) return message.channel.send("Error! Please try again..")
  

      let cEmbed = new Discord.RichEmbed()
      .setTitle("CAT")
      .setColor("#0000FF")
      .setImage(body.file)
      .setFooter("Created by NFR developers");

      message.channel.send(cEmbed);
      msg.delete();

    })

}

module.exports.help = {
    name:"cat"
  }
