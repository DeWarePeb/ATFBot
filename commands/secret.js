const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    return message.channel.send(`${args.slice}`);

}

module.exports.help = {
    name: "say",
    description: "Hi",
    category: "Fun"
}