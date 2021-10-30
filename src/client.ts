import 'reflect-metadata';
import { Client } from 'discordx';
import { Intents, Interaction, Message } from 'discord.js';

export default (): Promise<void> => {
	return new Promise((resolve, reject) => {
		const client = new Client({
			botId: 'test',
			// prefix: "!",
			// glob string to load the classes
			classes: [
				`${__dirname}/commands/**/*.{js,ts}`,
				`${__dirname}/events/**/*.{js,ts}`,
			],
			intents: [
				Intents.FLAGS.GUILDS,
				Intents.FLAGS.GUILD_MESSAGES,
				Intents.FLAGS.GUILD_MEMBERS,
			],
			silent: false,
		});

		client.on('ready', () => {
			console.log('>> Bot started');

			client.initApplicationCommands({
				global: { log: true },
				guild: { log: true },
			});
		});

		client.on('interactionCreate', (interaction: Interaction) => {
			client.executeInteraction(interaction);
		});

		client.login( process.env.BOT_TOKEN || 'NzA0MzA0Mjk2NTg1MzMwNzAw.XqbMfQ.XVF5GtEeV8Hgf46CniLikUPHWN0'
		).then(() => resolve()).catch((reason) => reject(reason));
	});
};
