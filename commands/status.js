const discord = require("discord.js");
const client = new discord.Client();

module.exports.run = async(client, message, args) =>{
    //OWNER ONLY COMMAND
if(!message.author.id === "271350440522809356") {
    return message.channel.send("This command can only be used by owner")
  }
  //ARGUMENT
  if(!args.length) {
    return message.channel.send("Please give status message")
  }
  
  client.user.setPresence({ activity: { name: args.join(" ") }})
 await message.channel.send("Updated the bot status");
    

}

module.exports.help = {
    name: "status",
    description: "Hi",
    category: "Fun"
}