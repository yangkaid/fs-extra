const { program } = require('commander')

// program
//     .version('1.0.0', '-v --version')
//     .argument('<username>','user to login')
//     .argument('[password]', 'password for user, if required','123')
//     .description('example program for argument')
//     .action((username, password) => {
//         console.log('username',username);
//         console.log('pasword',password);
//     });
//     program.parse();


program
    .command('serve')
    .description('launch web serve')
    .option('-p, --port <port_number>', 'web port',)
    .action((option) => {
        console.log(`serve on port ${option.port}`);
    })
    program.parse()