const package = require("./package.json")
const logger = (message, type = "info") => {
    let toLog = `[ShadowAdmin] ${message}`
    if(type == "error") return console.error(toLog) 
    if(type == "debug") return console.log(toLog)
    return console.log(toLog)
}
module.exports = {package, logger}