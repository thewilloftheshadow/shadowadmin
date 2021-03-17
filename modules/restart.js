const cmd = require("node-cmd")
const logger = require("../logger.js")
module.exports = () => {
    cmd.run(`pm2 restart ${process.env.pm_id}`)
    return true
}

logger("Module restart initialized", "debug")