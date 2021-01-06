//consts
const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
const prefix = "/";


//log when on
client.once("ready", () => {
    console.log("Chatbot is working!");
});

//math.random function
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);   
  }




//checking for message with prefix
client.on("message", message=> {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();



//embeds
function CreateEmbed(title, description) {
    return new Discord.MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setColor("RANDOM")
        .setFooter("ChatBot by Antismog#0004")
}
const embed = CreateEmbed("Commands", "/credits: credits da author \n /help: displays all commands \n  /roll: rolls dice 1-6 \n /invite generates auth link so you can add to your server \n /av: displays your avatar \n /info shows info about a user \n /gayrate tells how gay a user is");
const credit = CreateEmbed("Credits", "Created by Antismog#0004 \n This bot is just a roll bot for fun pretty basic and nezn is cool");
const authe = CreateEmbed("Auth link", "Click this link and verify to add to your server \n https://discord.com/api/oauth2/authorize?client_id=785997119642402827&permissions=125952&scope=bot");
const roll = getRandomInt(1,7);

//commands

//ping
    if(command==="ping"){
        message.channel.send("pong!").catch(console.error);
    }

//dice roll
else if(command==="roll") {
        message.delete().catch(console.error);
        message.channel.send(message.author.username + " rolled a " + roll).catch(console.error);
    }


//help
    else if(command==="help") {
        message.channel.send(embed).catch(console.error);
    }    

//credits
    else if(command==="credits") {
        message.channel.send(credit).catch(console.error);
    }

//invite
    else if(command==="invite") {
        message.channel.send(authe).catch(console.error);
    }    


//avatar
    else if(command==="av") {     
        const user = message.mentions.users.first() || message.author;
        const avatarembed = user.avatarURL({dynamic: true, size: 2048});
        const go = new Discord.MessageEmbed()
            .setTitle("Avatar")
            .setAuthor(user.tag)
            .setColor("RANDOM")
            .setImage(avatarembed)
            .setFooter("ChatBot by Antismog#0004")
        message.channel.send(go).catch(console.error);
    }

//info 
    else if(command==="info") {    
        const user = message.mentions.users.first() || message.author;
        const avatarembed = user.displayAvatarURL({dynamic: true, size: 2048});
        const go = new Discord.MessageEmbed()
            .setTitle("Info")
            .setColor("RANDOM")
            .setImage(avatarembed)
            .addField("Status", user.presence.status)
            .addField("ID", user.id)
            .addField("Is bot?", user.bot)
            .addField("Created on", user.createdAt)
            .addField("Tag", user.tag)
            .setFooter("ChatBot by Antismog#0004")
        message.channel.send(go).catch(console.error);
}
    else if(command==="gayrate") {
        const user = message.mentions.users.first() || message.author;
        const em = new Discord.MessageEmbed()
        .setTitle("Gay Rate Dectector")
        .setColor("RANDOM")
        .setDescription(user.tag + " is " + getRandomInt(0,100) + "% gay")
        .setFooter("ChatBot by Antismog#0004")
        message.channel.send(em).catch(console.error);
    }
});


client.on("error", () => {
    client.login("Token here");
});

client.login("Token here");