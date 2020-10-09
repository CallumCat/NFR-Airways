const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to use this command!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");
    
    let uicon = message.guild.member(kUser).displayAvatarURL;
    const kEmbed = new Discord.RichEmbed()
    .setTitle("Ban")
    .setDescription("Certain person who got banned")
    .setThumbnail(uicon)
    .setColor("RED")
    .addField("Banned User", `${kUser} with ID ${kUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .setTimestamp(message.createdAt)
    .addField("Reason", kReason)
    .setFooter("Created by NFR Developers");

    let sEmbed = new Discord.RichEmbed()
    .setTitle("You've been Banned!")
    .setColor("RED")
    .setThumbnail(uicon)
    .setDescription(`You've been Banned due to ${kReason}`)
    .addField("Appeal", "You can appeal for your ban by DM'ing HR team")
    .setTimestamp(message.createdAt)
    .setFooter("Created by NFR Developers");
   

    let logs = message.guild.channels.find(`name`, "logs");
    if(!logs) return message.channel.send("Can't find ban-logs channel.");
    message.guild.member(kUser).send(sEmbed).then(function(){
    message.guild.member(kUser).ban(kReason);
    logs.send(kEmbed);
    message.channel.send("Succesfully, that person has been banned!");
   });
    
    
}

module.exports.help = {
  name:"ban"
}
