import { ArgsOf, Client, Discord, On } from "discordx";

@Discord()
abstract class AppDiscord {
  @On("messageCreate")
  private onMessage(
    [message]: ArgsOf<"messageCreate">, // Type message automatically
    client: Client, // Client instance injected here,
    guardPayload: any
  ) {
    console.log(message)
  }
}
