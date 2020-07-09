const discord = require("discord.js");
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

module.exports.run = async(bot, message, args) =>{
    var response = await fetch(`${BASE_URL}/${pokemon}`);
    return await response.json();
    
}

module.exports.help = {
    name: "pokemon",
    description: "Hi",
    category: "Fun"
}