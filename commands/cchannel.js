const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

    if (!args[0]) {

          message.channel.overwritePermissions(message.guild.defaultRole, {
              VIEW_CHANNEL: false
          })
          message.channel.overwritePermissions(message.author, {
            VIEW_CHANNEL: true
        })
        message.channel.send("The channel is closed!")
        
        }
}

module.exports.help = {
    name:"cchannel"
  }
