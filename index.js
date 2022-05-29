const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const Client = new Discord.Client({intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
]
});

const data = new SlashCommandBuilder()
    .setName("rickroll");
    // .setDescription("envoie https://youtu.be/dQw4w9WgXcQ");

Client.on("ready", async () => {

    // Client.application.commands.create(data);

    // Client.guilds.cache.get("979005464639578153").commands.create(data);
    await Client.application.commands.fetch();
    Client.application.commands.cache.map(command => {
        command.delete();
    });

    console.log("bot opérationnel");
});

Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "rickroll"){
            interaction.reply("https://youtu.be/dQw4w9WgXcQ");
        }
    }
});

Client.login("OTY0ODM0NTc1NDU0OTYxNjk4.GXvvB9.I-5w88oeVNqcVyjrDjO9pTT-wrQQK7Dc4v3uX0");