const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    let MSG = message.content.split(`${bot.prefix}say `).join("");
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`);
    message.channel.send(MSG);
    message.delete();

}

module.exports.help = {
    name: "say",
    description: "Hi",
    category: "Fun"
}