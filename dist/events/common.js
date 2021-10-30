"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discordx_1 = require("discordx");
let AppDiscord = class AppDiscord {
    onMessage([message], // Type message automatically
    client, // Client instance injected here,
    guardPayload) {
        console.log(message);
    }
};
(0, tslib_1.__decorate)([
    (0, discordx_1.On)("messageCreate"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, discordx_1.Client, Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], AppDiscord.prototype, "onMessage", null);
AppDiscord = (0, tslib_1.__decorate)([
    (0, discordx_1.Discord)()
], AppDiscord);
//# sourceMappingURL=common.js.map