import { Command } from "commander";
const cli = new Command();

class Program {
  private cli: Command;
  constructor() {
    if (!process.argv.slice(2).length) {
      cli.outputHelp();
    }
    cli
      .argument("<jwt>", "base 64 encoded jwt to decode")
      .usage("<jwt>")
      .parse(process.argv);

    this.cli = cli;
  }

  getJwt() {
    const [jwt] = cli.processedArgs;
    return jwt;
  }
}

export const program = new Program();
