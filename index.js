// Importamos as dependências necessárias
const { Client, GatewayIntentBits, Guild } = require("discord.js")
const { userInfo } = require("os")
require("dotenv").config()

// Criamos uma instância do client
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] })

// Quando o client (bot) estiver pronto, escrevemos no console
client.once("ready", () => {
    console.log("Bot Online!")
})

// Logamos o bot
client.login(process.env.TOKEN)

client.on("messageCreate", (message) => {
    if (message.content === "!ping") {
        message.reply(`Pong! ${client.ws.ping}ms, feliz ${message.author.username}  ou melhor ${message.member.displayName}  ?`)
    }
})