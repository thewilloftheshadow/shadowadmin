const { Client } = require("discord.js")

module.exports = (saResources) => {
  saResources.client.on("message", (message) => {
    if (message.author.bot || !message.content.startsWith(saResources.options.prefix)) return
    if (
      message.author &&
      !saResources.options.owners.includes(message.author.id)
    )
      return saResources.logger(
        `${message.author.tag} is not an authorized ShadowAdmin user - ignoring`,
        "debug"
      )

    const args = message.content
      .slice(saResources.options.prefix.length)
      .split(/ +/)
    const command = args.shift().toLowerCase()

    if (!command == "shadowadmin" || command == "sa")
      return saResources.logger(
        `${command} is not a ShadowAdmin command - ignoring`,
        "debug"
      )

    //if(!args[0]) require("./panel.js")(saResources)

    if (saResources.exported[command])
      saResources.exported[command](saResources)
  })

  saResources.logger("Message handler initialized", "debug")
}
