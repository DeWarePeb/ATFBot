const discord = require("discord.js");
const urban = require("urban");

module.exports.run = async(bot, msg, suffix) =>{
    var targetWord = suffix == "" ? urban.random() : urban(suffix);
					targetWord.first(function(json) {
							if (json) {
								var message = "Urban Dictionary: **" +json.word + "**\n\n" + json.definition;
								if (json.example) {
										message = message + "\n\n__Example__:\n" + json.example;
								}
						    msg.channel.send( message);
							} else {
								msg.channel.send( "No matches found");
							}
					});

}

module.exports.help = {
    name: "urban",
    description: "Hi",
    category: "Fun"
}