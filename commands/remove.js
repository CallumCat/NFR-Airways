const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");    
   
    message.channel.overwritePermissions(kUser, {
        VIEW_CHANNEL: false
    })

    message.channel.send(`Successfully, Removed ${kUser}!`)
}

module.exports.help = {
    name:"remove"
}
