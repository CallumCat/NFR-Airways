const Discord = require('discord.js');
const data = require('../ids.json')
const fs = require ("fs")

module.exports.run = async (bot, message, args) => {

    let regchannel =  message.guild.channels.find(`name`, "staff-registration");
    let role = args.join(" ");
    let sentEmbed = new Discord.RichEmbed()   
    .setTitle("Registered Staff/Trainee/HR")
    .setColor("GREEN")
    .setDescription( `ID: ${data.id}\n`+
    `Name: ${message.author.tag} \n` +
    `Rank: ${role} \n`, "Registered Staff Embed" )
    .setTimestamp("Created by NFR Devlopers");
        regchannel.send(sentEmbed);
        message.channel.send(`Successfully, you've been registered! Your Staff ID is ${data.id}`);
        message.author.send(`Your Staff ID is #${data.id}, please remember this ID.`)
    
        data.id++;
fs.writeFile('../ids.json', '{\n"id":' + data.id + "\n}", (err) => {
    if (!err) return;
    console.error(err)
})

}

module.exports.help = {
    name:"register"
  }
