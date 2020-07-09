const discord = require("discord.js");

module.exports. async = (oldMessage, newMessage) =>{
    try {
        var embed = new discord.MessageEmbed()
          .setTitle(`New message edited`)
          .setColor(`GREEN`)
          .setDescription(
            `**The user ${oldMessage.author.tag} has edited a message in <#${oldMessage.channel.id}>**`
          )
          .addField(`Old Content`, oldMessage.content, true)
          .addField(`New Content`, newMessage.content, true);
        var channel = oldMessage.guild.channels.cache.find(
          (ch) => ch.name === "🔫server-log"
        );
        if (!channel) return;
        channel.send(embed);
      } catch (e) {}

}

module.exports.help = {
    name: "log",
    description: "Hi",
    category: "Fun"
}