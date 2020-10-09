const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setTitle("Help Section")
    .setDescription("All Commands that can be used by Non-Moderators.")
    .setColor("#0000FF")
    .addField(":report", 'Through this command you can report a player or a staff member with a reason.')
    .addField(":suggest", "Through this command you can suggest an idea and then people can vote it if they want it or no.")
    .addField(":userinfo", "Through this command you can know some information about your discord account")
    .addField(":botinfo", "Through this account you can know some information about this bot.")
    .addField(":serverinfo", "Through this command you can know some information about this server.")
    .setTimestamp(message.createdAt);

    message.channel.send(botembed)

}

module.exports.help = {
  name:"sendcom"
}
