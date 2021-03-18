const Discord = require("discord.js")
const defaults = require("./defaults.js")
const fs = require("fs")
let r = require("./r.js")

const allModules = fs.readdirSync("./modules").filter(file => file.endsWith(".js"));
for (const file of allModules) {
    module.exports[file.replace(".js", "")] = require(`./modules/${file}`)
}

const messageHandler = require("./messageHandler.js")
module.exports.init = (client, options = defaults) => {
    if(!client instanceof Discord.Client) throw new Error("You must pass a vaild client from discord.js!")
    if(!client.readyTimestamp) throw new Error("ShadowAdmin must be initialized inside the ready event of the client!")
    
    for(let x in defaults){
        if(!options[x]) options[x] = defaults[x]
    }

    r.client = client, r.options = options
    logger(`ShadowAdmin v${package.version} initialized.`)
    if(options.messageHandler) messageHandler(client, options)
}