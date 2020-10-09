const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let sembed = new Discord.RichEmbed()
  .setDescription("Prefix:   **:**\n" +
  "\n" +
  "**Support**\n" +
  "\n" +
  "**report** \n" +
  "**suggest** \n" +
  "**userinfo (On Progress)** \n" +
  "**botinfo** \n" +
  "**serverinfo** \n" +
  "**apply** \n" +
  "**purchased (On Progress)** \n" +
  `**classticket** ( On progress ) .\n`+
  "\n" +
  "\n" +
  "**Admin**\n" +
  "\n" +
  "**announce** \n" +
  "**about** \n" +
  "**dm** \n" +
  "**host** \n" +
  "**links** \n" +
  "**rules** \n" +
  "**partners** \n" +
  "**purge** \n" +
  "**poll** \n" +
  "**rr** \n" +
  "**qotd** \n" +
  "**ban** \n" +
  "**mute** \n" +
  `**kick**\n`+
  "\n" +
  "**Fun Commands**\n" +
  "\n" +
  "**coins** \n" +
  "**pay** \n" +
  "**level** \n" +
  "**cat** \n" +
  "**dog** \n" +
  "**meme** \n" +
  "**alpaca** \n" +
  "**seal** \n" +
  "**llama** ")
  .setColor("#0000FF")
  .setFooter("Help Section", "https://t0.rbxcdn.com/0fbf295b9ca0b176adcc0f1cd4bc0617")
  
  message.channel.send(sembed)

}    
module.exports.help = {
  name:"help"
}
