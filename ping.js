const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {
  message.delete().catch(console.error);
 
    waiting = await message.channel.send("JE CHERCHE").catch(console.error);
 
    var pingEmbed = new Discord.RichEmbed()
    .setAuthor("Latence du bot & de l'api discord.js", bot.user.avatarURL)
    .setColor("RANDOM")
    .addField("**🤖 TUTOYOUTUBE :**", "> `" + `${waiting.createdTimestamp - message.createdTimestamp}` + "ms`", true)
    .addField("**<:discordjs:529764168593702923> API discord.js :**", "> `" + Math.round(bot.ping) + "ms`", true)
    .setTimestamp(message.createdAt)
    .setFooter("Tutoyoutube | demandé par @" + message.author.tag, bot.user.avatarURL)
    waiting.edit(pingEmbed).catch(console.error);
}
module.exports.help = {
  name: "ping"
}