const package = require("./package.json")
const Discord = require("discord.js")
const defaults = require("./defaults.js")
const fs = require("fs")
const logger = require("./logger.js")

module.exports.saResources = {logger}

const modules = fs.readdirSync("./modules").filter(file => file.endsWith(".js"));
for (const file of modules) {
    module.exports[module] = require(`./modules/${file}`)
}

const messageHandler = require("./messageHandler.js")

module.exports.init = (client, options = defaults) => {
    if(!client.readyTimestamp) throw new Error("ShadowAdmin must be initialized inside the ready event of the client!")
    
    for(let x in defaults){
        if(!options[x]) options[x] = defaults[x]
    }
    saResources = {client, options, logger, exported: module.exports}
    logger(`ShadowAdmin v${package.version} initialized.`)
    if(options.messageHandler) messageHandler(saResources)
}
