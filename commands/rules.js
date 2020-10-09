const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let vEmbed = new Discord.RichEmbed()
    .setColor("#0000FF")
    .setDescription("\n" +
"\n" +
"- Any type of discrimination will NOT be tolerated.\n" +
"- Only use commands in #bot-commands.\n" +
"- Please respect all members regardless of whoever they are.\n" +
"- Don't start or participate in drama related situation in this server.\n" +
"- We have zero tolerance with NSFW or inappropriate content being posted.\n" + 
"- Don't ghost ping anyone.\n" +
"- Swearing is prohibited.\n" +
"- Never spam in this server.\n" +
"- Please no advertising of any kind.\n" +
"- Don't ping staff members unless it is urgent.\n" +
"- Follow all Discord's Terms of Service.")
 .setFooter(`${message.guild.name} Official Rules.`, "");

    message.channel.send(vEmbed)
}

module.exports.help = {
    name: "rules"
  }
