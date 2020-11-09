const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Please enter the number: ', (n) => {
    const fx = (n) => +Math.max(...(n + '').split(''));
    const fn = (n) => +Math.min(...(n + '').split(''));

    console.log(fn(n)+fx(n)); 
    rl.close();
});

