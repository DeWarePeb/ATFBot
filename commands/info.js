const discord = require("discord.js");
const { version } = require('../package.json');
const { prefix } = require('../botconfig.json');
const ms = require('ms');
const os = require('os');

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/625873846452486175/720644029829611560/image0.jpg")
        .setColor('BLUE')
        .addField('General', [
            `**Prefix**: ${prefix}`,
            `**Version:** V${version}`
        ])
        .addField('System', [
            `**Uptime:** ${ms(os.uptime() * 1000, { long: true})}`,
            `**❯ Memory:**`,
				`\u3000 Total: ${this.client.utils.formatBytes(process.memoryUsage().heapTotal)}`,
				`\u3000 Used: ${this.client.utils.formatBytes(process.memoryUsage().heapUsed)}`
        ])
        .setTimestamp();
    message.channel.send(embed);
}

module.exports.help = {
    name: "bot-info",
    description: "Bot info",
    category: "Information"
}