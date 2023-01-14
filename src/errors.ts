import chalk from "chalk";
export class ParseError extends Error {
  value: string;
  part: string;
  constructor(message: string, value: string, part: string) {
    super(message);
    this.value = value;
    this.part = part;
  }
}

export function getErrorDetail(e: Error): ParseError | undefined {
  if (e instanceof ParseError) {
    return e;
  }
}

export function printError(error: Error, jwt: string) {
  const parseError = getErrorDetail(error);
  console.error(
    ` ⚠️  ${chalk.red(error.message)}:`,
    `${chalk.yellow(escapeShell(parseError?.value))}`
  );
  if (!parseError) {
    return;
  }
  const start = jwt.indexOf(parseError.part);
  const end = start + parseError.part.length;
  const firstPart = jwt.substring(0, start);
  const errorPart = chalk.bgRed(jwt.substring(start, end));
  const thirdPart = jwt.substring(end);
  console.log();
  console.log(`${firstPart}${errorPart}${thirdPart}`);
  console.log();
}

function escapeShell(cmd: string = ""): string {
  return '"' + cmd.replace(/(["'$`\\])/g, "\\$1") + '"';
}
