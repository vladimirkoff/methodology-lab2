import { Command } from 'commander';

const program = new Command();

program
    .option('-n, --name <name>', 'Your name')
    .parse(process.argv);


const name = program.opts().name || 'stranger';
console.log(`Hello, ${name}!`);