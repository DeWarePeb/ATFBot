const discord = require("discord.js");
const db = require("quick.db")

module.exports.run = async(bot, message, args) =>{
    //OWNER ONLY COMMAND
if(!message.author.id === "YOUR ID") {
    return message.channel.send("This command can only be used by owner")
  }
  //ARGUMENT
  if(!args.length) {
    return message.channel.send("Please give status message")
  }
  
db.set(`status`, args.join(" "))
 await message.channel.send("Updated the bot status")
  process.exit(1);
    

}

module.exports.help = {
    name: "status",
    description: "Hi",
    category: "Fun"
}