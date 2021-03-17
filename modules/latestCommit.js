const { exec } = require("child_process")
const logger = require("../logger.js")
module.exports = () => {
  exec("git rev-parse --short HEAD", (err, stdout, stderr) => {
    if (err) {
      throw new Error(err)
    } else {
      return stdout
    }
  })
}

logger("Module latestCommit initialized", "debug")