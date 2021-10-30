"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const discordx_1 = require("discordx");
const utilities_1 = require("@discordx/utilities");
let AppDiscord = class AppDiscord {
    async pages(interaction) {
        const commands = discordx_1.MetadataStorage.instance.applicationCommands.map((cmd) => {
            return { name: cmd.name, description: cmd.description };
        });
        const pages = commands.map((cmd, i) => {
            return new discord_js_1.MessageEmbed()
                .setFooter(`Page ${i + 1} of ${commands.length}`)
                .setTitle("**Slash command info**")
                .addField("Name", cmd.name)
                .addField("Description", cmd.description);
        });
        const pagination = new utilities_1.Pagination(interaction, ["hi", "hi2", "hi3"]);
        await pagination.send();
    }
};
(0, tslib_1.__decorate)([
    (0, discordx_1.Slash)("slashes", { description: "Pagination for all slash command" }),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [discord_js_1.CommandInteraction]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AppDiscord.prototype, "pages", null);
AppDiscord = (0, tslib_1.__decorate)([
    (0, discordx_1.Discord)()
], AppDiscord);
//# sourceMappingURL=common.js.map