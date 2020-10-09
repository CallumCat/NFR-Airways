const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = message.author.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Player Information")
    .setDescription("\n" +
    `**Name** - ${message.member.name}\n`
    `**ID** - ${message.member.id}\n` +
    `**Registered** - ${message.member.createdAt}\n` +
    `**Roles** -  ${member.roles.map(r => `${r}`).join(' | ')}\n` +
    `**Joined Group** - ${message.member.joinedAt}`)
    .setColor("#FB9898")
    .setThumbnail(bicon)
    .setFooter("Player Information.", "https://cdn.discordapp.com/attachments/539519926759587862/600321789998137369/image0.jpg");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"userinfo"
}
