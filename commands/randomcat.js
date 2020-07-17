const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{
    const SA = require('superagent')
    try {
      const res = await SA.get('https://aws.random.cat/meow')
      const fact = (await SA.get('https://catfact.ninja/fact')).body.fact
      await this.safeSendMessage(msg.channel, {
        embed: {
          description: fact,
          image: {
            url: res.body.file
          },
          footer: {
            text: 'random.cat'
          }
        }
      })
    } catch (e) {
      this.safeSendMessage(msg.channel, 'Something went wrong, try again later')
      logger.error('CMD', e)
    }
    
}

module.exports.help = {
    name: "cat",
    description: "Hi",
    category: "Fun"
}