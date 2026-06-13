const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");

// ====== EXPRESS (fixes Render port issue) ======
const app = express();
app.get("/", (req, res) => res.send("Bot is running"));
app.listen(3000, () => console.log("Web server started"));

// ====== DISCORD BOT ======
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ],
});

client.once("ready", async () => {
  console.log(`Logged in as ${client.user.tag}`);

  const channel = await client.channels.fetch("1515316009177976872");

  if (!channel) {
    console.log("Channel not found");
    return;
  }

  // test message instantly
  channel.send("🌱 Bot is ONLINE!");

  // loop message every 5 minutes
  setInterval(() => {
    channel.send("🌱 Bot is working!");
  }, 300000);
});

client.login(process.env.TOKEN);
