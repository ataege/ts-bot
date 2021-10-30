"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const discordx_1 = require("discordx");
const discord_js_1 = require("discord.js");
const client = new discordx_1.Client({
    botId: "test",
    // prefix: "!",
    // glob string to load the classes
    classes: [`${__dirname}/commands/**/*.{js,ts}`, `${__dirname}/events/**/*.{js,ts}`],
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_MEMBERS,
    ],
    silent: false,
});
client.on("ready", () => {
    console.log(">> Bot started");
    // to create/update/delete discord application commands
    client.initApplicationCommands({
        global: { "log": true },
        guild: { "log": true }
    });
});
client.on("interactionCreate", (interaction) => {
    client.executeInteraction(interaction);
});
client.login(process.env.BOT_TOKEN ?? "NzA0MzA0Mjk2NTg1MzMwNzAw.XqbMfQ.XVF5GtEeV8Hgf46CniLikUPHWN0");
//# sourceMappingURL=client.js.map