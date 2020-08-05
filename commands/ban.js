const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!args[1]) return message.reply("Who?");

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("No");

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("No permission");

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

    var reason = args.slice(2).join(" ");

    if (!banUser) return message.reply("cannot find user");

    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.reply("No");

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setThumbnail(banUser.user.displayAvatarURL)
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`** Banned:** ${banUser} (${banUser.id})
        **Banned By:** ${message.author}
        **Reason: ** ${reason}`);

    banUser.ban(reason).catch(err => {
        if (err) return message.channel.send(`Something went wrong`);
    });

    message.reply(embed);

}

module.exports.help = {
    name: "ban",
    description: "Bans",
    category: "Moderation"
}