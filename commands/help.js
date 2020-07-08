const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async(client, message, args) =>{

    var commandList = [];
    var prefix = botConfig.prefix;

    client.commands.forEach(command => {

        var constructor = {

            name:command.help.name,
            description: command.help.description,
            catagory: command.help.catagory

        }

        commandList.push(constructor);
    });
    
    var response = "**Bot commands**\n\n ";
    var Information = "**__Information__**\n";
    var Fun = "\n**__Fun__**\n";
    var Moderation = "\n**__Moderation__**"

    for (let i = 0; i < commandList.length; i++) {
        const command = commandList[i];

        if(command["catagory"] == "Information") {

            Information += `${prefix}${command["name"]} - ${command["description"]}\n`;

        } else if(command["catagory"] == "Fun") {
            
            Fun += `${prefix}${command["name"]} - ${command["description"]}\n`;
        
        } else if (command["catagory"] == "moderation"){
            
            Moderation += `${prefix}${command["name"]} - ${command["description"]}\n`;
        
        }
    
    }
        
    response += Information;
    response += Fun;
    response += Moderation;

    message.author.send(response).then(() => {
        message.channel.send("Slided in yo dms");
    }).catch(() => {
        message.channel.send("Open yo dms");
    })
       


        
           
}

module.exports.help = {
    name: "help",
    description: "gives all of the commands",
    category: "Information"
}