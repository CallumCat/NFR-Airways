const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to use this command!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
    
    let uicon = message.guild.member(kUser).displayAvatarURL;
    const kEmbed = new Discord.RichEmbed()
    .setTitle("Kick")
    .setDescription("Certain who got kicked")
    .setThumbnail(uicon)
    .setColor("YELLOW")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .setTimestamp(message.createdAt)
    .addField("Reason", kReason)
    .setFooter("Created by NFR Developers");

    let sEmbed = new Discord.RichEmbed()
    .setTitle("You've been Kicked!")
    .setColor("YELLOW")
    .setThumbnail(uicon)
    .setDescription(`You've been Kicked due to ${kReason}`)
    .addField("Warning", "You've last warning afterwards you'll be banned!")
    .setTimestamp(message.createdAt);
   

    let logs = message.guild.channels.find(`name`, "logs");
    if(!logs) return message.channel.send("Can't find logs channel.");
    message.guild.member(kUser).send(sEmbed).then(function(){
    message.guild.member(kUser).kick(kReason);
    logs.send(kEmbed);
    message.channel.send("Succesfully, that person has been kicked!");
   });
    
    
}

module.exports.help = {
  name:"kick"
}
