const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async(bot, message, args) =>{

    if(!message.member.voice.channel) return message.reply("Join a vc");

    if(message.guild.me.voice.channel) return message.channel.send("Im bussy");

    if(!args[0]) return message.reply("what?");

    var validate = await ytdl.validateURL(args[0]);
    if(!validate) return message.channel.send("YOUTUBE links only");

    var info = await ytdl.getInfo(args[0]);

    var options = {seek: 3, volume: 1};

    var channelJoin = message.member.voice.channel.join()
        .then(voiceChannel => {

            var stream = ytdl(args[0], {filter: 'audioonly'});
            var dispatcher = voicheChannel.play(stream, options);
        }).catch(console.error);

    message.channel.send(`Now playing ${info.title}`);

}

module.exports.help = {
    name: "play",
    description: "Hi",
    category: "Fun"
}