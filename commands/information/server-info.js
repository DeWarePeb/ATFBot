const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    var botEmbed = new discord.MessageEmbed()
               .setTitle("Server Info")
               .setColor("#0099ff")
               .addFields(
                   {name: "You have joined this server on:", value: message.member.joinedAt},
                   {name: "Members:", value:message.guild.memberCount}
               )
               .setTimestamp()
        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "server-info",
    description: "Server info",
    category: "Information"
}