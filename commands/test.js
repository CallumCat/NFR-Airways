const Discord = require("discord.js")
const rbx = require("noblox.js")
const fs = require('fs')

module.exports.run = async (bot, message, args) => {
  message.delete(1000)
  let role = message.guild.roles.find(`name`, 'Verified');

  let sEmbed = new Discord.RichEmbed()
 .setAuthor("Verification",  bot.user.displayAvatarURL)
 .setTitle("Please Enter your ROBLOX Username.")
 .setColor("#FB9898");
 const filter = m => m.author.id === message.author.id;
 message.channel.send(sEmbed).then(function (message) {message.delete(15000)});
 message.channel.awaitMessages(filter, {
 max: 1,
 time: 30000})
 .then(collected => {
   
  if(collected.first().content === "cancel") {
    return message.channel.send("Cancelled.")
  }
  
  let username = collected.first().content;
   
  rbx.getIdFromUsername(username).then(foundId => {
    console.log(`Id is ${foundId}`);
    let ids = JSON.parse(fs.readFileSync("./id.json", "utf8"));
    message.member.setNickname(username)
    ids[message.author.id] = {
     rblxid: foundId
    }
    fs.writeFile("./id.json", JSON.stringify(ids), (err) => { 
           if (err) console.log(err)
    });
    let nEmbed = new Discord.RichEmbed()
    .setDescription(`${message.author.username} verified as ${username}`)
    .setColor("#FB9898");
    const logs = message.guild.channels.find(c => c.name === 'logs');
    
    logs.send(nEmbed);
    
    let rEmbed = new Discord.RichEmbed(sEmbed)
    .setAuthor("Found!", bot.user.displayAvatarURL)
    .setTitle(`Before verifying, please read the rules in #info and then react :white_check_mark:`)
    .setColor("#FB9898");
    message.channel.send(rEmbed).then(function (message) {
      message.react("✅")
      message.delete(15000)
  
      
    
     

});
  });
});
}

module.exports.help = {
  name:"test"
}
