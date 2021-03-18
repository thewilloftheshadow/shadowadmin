const { MessageEmbed } = require("discord.js")
const r = require("./r.js")

let embed = new Discord.MessageEmbed()
  .setTitle("Admin Panel - " + client.user.tag)
  .setDescription(
    `📋 - See last commit
🔄 - Restart the bot`
  )
  .setColor("GREEN")
  .setFooter(`ShadowAdmin v${r.package.version}`)
  .setTimestamp()
  .setThumbnail(client.user.avatarURL())

module.exports = (client, options) => {
  client.on("message", (message) => {
    if (message.author.bot || !message.content.startsWith(options.prefix))
      return
    if (message.author && !options.owners.includes(message.author.id))
      return logger(
        `${message.author.tag} is not an authorized ShadowAdmin user - ignoring`,
        "debug"
      )

    const args = message.content.slice(options.prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if (!command == "shadowadmin" || command == "sa")
      return logger(
        `${command} is not a ShadowAdmin command - ignoring`,
        "debug"
      )

    //if(!args[0]) require("./panel.js")(saResources)

    if (exported[command]) exported[command]()
  })

  logger("Message handler initialized", "debug")
}
