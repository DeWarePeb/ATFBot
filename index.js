const discord = require("discord.js");
const botconfig = require("./botconfig.json");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));



const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./commands", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);
    })
});

client.login(process.env.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);
    client.user.setActivity("ATF on top!", {type: "LISTENING"});


});

//log
client.on('messageDelete', message => {
    if(!message.partial) {
        const channel = client.channels.cache.get('647342917538807821');
        if(channel) {
            var embed = new discord.MessageEmbed()
                .setTitle('Deleted Message')
                .addField('Author', `${message.author.tag} (${message.author.id})`, true)
                .addField('Channel', `${message.channel.name} (${message.channel.id})`, true)
                .setDescription(message.content)
                .setTimestamp();
            channel.send(embed);
        }
    }
});
//log

client.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get('625462119940227103');

    if (!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get('575107491873161229');

    if (!channel) return;

    //channel.send(`Welcome to ATFO ${member}!`);

    var joinEmbed = new discord.MessageEmbed()
    .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
    .setDescription(`Welcome ${member.user.username}, to ATFO!`)
    .setColor("#00ff00")
    .setFooter("Member joined")
    .setTimestamp();

    channel.send(joinEmbed);
    

})


client.on("guildMemberRemove", member => {
    var channel = member.guild.channels.cache.get('622513188809736193');

    if (!channel) return;


    var leaveEmbed = new discord.MessageEmbed()
    .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
    .setColor("#ff0000")
    .setFooter("Member left")
    .setTimestamp();

    channel.send(leaveEmbed);
    

})


client.on("message", async message => {
    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

    var prefix = botconfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    if (!message.content.startsWith(prefix)) return;

    var commands = client.commands.get(command.slice(prefix.length));

    if (commands) commands.run(client, message, arguments);

    // Emojis aan teksten kopellen.
    async function promptMessage(message, author, time, reactions) {
        // We gaan eerst de tijd * 1000 doen zodat we seconden uitkomen.
        time *= 1000;

        // We gaan ieder meegegeven reactie onder de reactie plaatsen.
        for (const reaction of reactions) {
            await message.react(reaction);
        }

        // Als de emoji de juiste emoji is die men heeft opgegeven en als ook de auteur die dit heeft aangemaakt er op klikt
        // dan kunnen we een bericht terug sturen.
        const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

        // We kijken als de reactie juist is, dus met die filter en ook het aantal keren en binnen de tijd.
        // Dan kunnen we bericht terug sturen met dat icoontje dat is aangeduid.
        return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
    }
}
)