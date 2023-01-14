import base64 from "base-64";
import chalk from "chalk";
import { ParseError } from "./errors";

export class Printer {
  private parts: string[];
  constructor(jwt: string) {
    this.parts = jwt.split(".");
  }

  print() {
    const header = asJson(this.parts[0]);
    const body = asJson(this.parts[1]);
    console.log(title("-------  PRETTY JWT ------- "));

    console.log(chalk.cyanBright(header));

    console.log(chalk.whiteBright("."));
    console.log(chalk.cyanBright(body));
    console.log();
  }
}

function asJson(part: string): string {
  let decoded;
  try {
    decoded = base64.decode(part);
  } catch (error) {
    throw new ParseError("invalid base64", part, part);
  }
  try {
    return JSON.stringify(JSON.parse(decoded), null, "  ");
  } catch (error) {
    throw new ParseError("invalid json", decoded, part);
  }
}

function title(toPrint: string) {
  return chalk.italic.bold.bgMagenta(`\n${toPrint}\n`);
}
