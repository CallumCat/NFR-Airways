const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

let role = args.join("  ");
let gRole = message.guild.roles.find(`name`, role);
if(!gRole) return message.channel.send("Couldn't find that role.");
message.author.addRole(gRole.id)
message.channel.send("You've been ranked!");

}

module.exports.help = {
     name: "timezone"
}
