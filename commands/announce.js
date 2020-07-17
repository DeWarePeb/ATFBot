const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) =>{

    let rChannel = message.guild.channels.cache.get(args[0]);
    if (!rChannel)
      return message.channel.send(
        `You did not specify your channel to send the announcement too!`
      );
    console.log(rChannel);
    let MSG = message.content
      .split(`${client.prefix}announce ${rChannel.id} `)
      .join("");
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`);
    const _ = new MessageEmbed()
      .setTitle(`New announcement!`)
      .setDescription(`${MSG}`)
      .setColor("BLACK");
    rChannel.send(_);
    message.delete();

}

module.exports.help = {
    name: "announce",
    description: "Hi",
    category: "Fun"
}