const package = require("./package.json")
const Discord = require("discord.js")
const defaults = require("./defaults.js")
const fs = require("fs")

let saResources = {}

module.exports.init = (client, options = defaults) => {
    if(!client.readyTimestamp) throw new Error("ShadowAdmin must be initialized inside the ready event of the client!")
    
    for(let x in defaults){
        if(!options[x]) options[x] = defaults[x]
    }
    saResources = {client, options, logger, exported: module.exports}
    logger(`ShadowAdmin v${package.version} initialized.`)
    if(options.messageHandler) require(`./messageHandler.js`)(saResources)
}

const logger = (message, type = "info") => {
    let toLog = `[ShadowAdmin] ${message}`
    if(type == "error") return console.error(toLog) 
    if(type == "debug" && saResources.options.debug) return console.log(toLog)
    return console.log(toLog)
}