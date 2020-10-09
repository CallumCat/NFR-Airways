const Discord = require('discord.js');
const data = require('../tickets.json')
const fs = require ("fs")

module.exports.run = async (bot, message, args) => {

    if (!args[0]) {

    let sentEmbed = new Discord.RichEmbed()   
    .setTitle(`Support ticket created for ${message.author.tag}`)
    .setDescription("Your support ticket has been created!\nStaff will contact you in the support ticket shortly!")
    .setTimestamp(message.CreatedAt);

      message.guild.createChannel(`support-${data.id}`, "text")
      .then(channel => {
          channel.overwritePermissions(message.guild.defaultRole, {
              VIEW_CHANNEL: false
          })
          channel.overwritePermissions(message.author, {
            VIEW_CHANNEL: true
        })
      .then 
        
        message.channel.send(sentEmbed)
        data.id++;
fs.writeFile('./tickets.json', '{\n"id":' + data.id + "\n}", (err) => {
    if (!err) return;
    console.error(err)
})
          });
    }

}

module.exports.help = {
    name:"support"
  }