const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
       function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("\n" + 
    `**Server Name** - ${message.guild.name}\n` +
    `**Server Region** - ${message.guild.region}\n` +
    `**Server ID** - ${message.guild.id}\n` +
    `**Server Creation Date** - ${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})\n` +
    `**Owner** - ${message.guild.owner}\n` +
    `**Total Members** - ${message.guild.memberCount}\n` +
    `**Humans** - ${message.guild.members.filter(member => !member.user.bot).size}\n` +
    `**Bots** -  ${message.guild.members.filter(member => member.user.bot).size}\n` +
    `**Roles** - ${message.guild.roles.size}\n` +
    `**Channels** - ${message.guild.channels.size}`)
    .setColor("#0000FF")
    .setThumbnail(sicon)
    .setFooter(`${message.guild.name} Server Information.`, "https://t0.rbxcdn.com/0fbf295b9ca0b176adcc0f1cd4bc0617");

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
