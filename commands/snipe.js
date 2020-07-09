  const discord = require("discord.js");
  const config = require("../botconfig.json.json")
  const db = require("quick.db")

  module.exports.run = async(bot, message, args) =>{
     var prefix = await db.fetch(`prefix_${message.guild.id}`)
     if(prefix == null) {
     prefix =  config.prefix
     }
     
     const msg = client.snipes.get(message.channel.id)
     if(!msg) return message.channel.send("There are no deleted messages in this channel!")
     const embed = new Discord.MessageEmbed()
     .setAuthor(msg.author)
     .setDescription(msg.content)
     if(msg.image)embed.setImage(msg.image)
     
      message.channel.send(embed)
    
     
    }
      
  
  
  
  module.exports.help = {
      name: "hi",
      description: "Hi",
      category: "Fun"
  }