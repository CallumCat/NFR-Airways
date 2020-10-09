const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name} Application Links.`)
    .setDescription("\n" +
    "Here our applications to became staff Member with us.\n" +
    `[Lower-Rank: Flight Deck Staff/Cabin Crew/Ground Crew](https://forms.gle/)\n` +
    `[High-Rank: Board Of Directors /Head Of Department]( https://forms.gle/)`)
    .setColor("#0000FF")
    .setFooter(`Good luck! - ${message.guild.name} Team`, "https://t0.rbxcdn.com/0fbf295b9ca0b176adcc0f1cd4bc0617");

    message.channel.send(":white_check_mark: Successfully, You've been provided the links!");
    message.member.send(botembed);

}

module.exports.help = {
  name:"apply"
}
