const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    
    
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("no");
    
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("no perms");
    
        if (!args[0]) return message.reply("who?");
    
        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    
        var reason = args.slice(1).join(" ");
    
        if (!kickUser) return message.reply("cannot find member.");

        if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
    
        var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(kickUser.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(`** kicked:** ${kickUser} (${kickUser.id})
            **kicked by:** ${message.author}
            **reason: ** ${reason}`);

            kickUser.kick(reason).catch(err => {
                if (err) return message.channel.send(`Something went wrong.`);
            });
            message.reply(embed);
}

module.exports.help = {
    name: "kick",
    description: "get outta here",
    category: "Moderation"
} 