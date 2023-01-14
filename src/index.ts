import { printError } from "./errors";
import { Printer } from "./printer";
import { program } from "./program";

function main() {
  const jwt = program.getJwt();
  try {
    new Printer(jwt).print();
  } catch (error) {
    printError(error as Error, jwt);
  }
}

main();
