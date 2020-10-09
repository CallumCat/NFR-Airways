const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You don't have permission to use this command");
    if(!args[0]) return message.channel.send('You must specify the number of messages to delete');

    message.channel.bulkDelete(args[0]).then(() => { 
        message.channel.send(`:white_check_mark: Messages have been deleted.`).then(msg => msg.delete(5000));
    });

} 

module.exports.help = {
    name:"purge"
  }