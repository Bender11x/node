import PromptSync from 'prompt-sync';
import chalk from 'chalk';
const prompt = PromptSync()

let nome = prompt("Digite seu nome: ");

console.log(chalk.green(nome)); 