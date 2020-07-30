const discord = require("discord.js");
const { version } = require('../package.json');
const { prefix } = require('../botconfig.json');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
        .setThumbnail(this.client.user.displayAvatarURL())
        .setColor('BLUE')
        .addField('General', [
            `**Bot:** ${this.client.user.tag} (${this.client.user.id})`,
            `**Prefix: ${prefix}`,
            `**Version:** V${version}`
        ])
        .setTimestamp;
    message.channel.send(embed);
}

module.exports.help = {
    name: "bot-info",
    description: "Bot info",
    category: "Information"
}