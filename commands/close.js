const Discord = require("discord.js");
const Config = require("../config.json")

module.exports.run = async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permssion to use this command!");
        if (message.channel.name.startsWith("support-")) {
        message.channel.delete();

    }
}
module.exports.help = {
    name:"close"
}