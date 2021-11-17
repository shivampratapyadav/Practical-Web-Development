//CHALK IS USED TO PROVIDE COLOURS
//FIGLET IS USED TO BOLD AND INCREASE THE SIZE OF TEXT.

let chalk = require("chalk");
let figlet = require("figlet");

console.log(chalk.blue('Hello world!'));
console.log(chalk.bold('Hello world!'));
console.log(chalk.bgGreen('Hello world!'));
console.log(chalk.bgCyan('Hello world!'));
console.log(chalk.underline('Hello world!'));
console.log(chalk.bgWhite('Hello world!'));
console.log(chalk.bgRedBright('Hello world!'));
console.log(chalk.bgRed('Hello world!'));


console.log(chalk.red(figlet.textSync('# HELLO DEVELOPERS')));
