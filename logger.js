module.exports = (message, type = "info") => {
    let toLog = `[ShadowAdmin] ${message}`
    if(type == "error") return console.error(toLog) 
    if(type == "debug" && saResources.options.debug) return console.log(toLog)
    return console.log(toLog)
}