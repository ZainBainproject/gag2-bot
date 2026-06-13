const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);

  const channel = client.channels.cache.get("1515316009177976872");

  setInterval(() => {
    if (!channel) return;
    channel.send("🌱 Bot is online and working!");
  }, 300000);
});

client.login(process.env.TOKEN);