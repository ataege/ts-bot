import { CommandInteraction, MessageEmbed } from 'discord.js';
import { Discord, MetadataStorage, Slash } from 'discordx';
import { Pagination } from "@discordx/utilities";

@Discord()
abstract class AppDiscord {
  @Slash("slashes", { description: "Pagination for all slash command" })
  async pages(interaction: CommandInteraction): Promise<void> {
    const commands = MetadataStorage.instance.applicationCommands.map((cmd) => {
      return { name: cmd.name, description: cmd.description };
    });

    const pages = commands.map((cmd, i) => {
      return new MessageEmbed()
        .setFooter(`Page ${i + 1} of ${commands.length}`)
        .setTitle("**Slash command info**")
        .addField("Name", cmd.name)
        .addField("Description", cmd.description);
    });

    const pagination = new Pagination(interaction, ["hi", "hi2", "hi3"]);
    await pagination.send();
  }
}
