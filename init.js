const funcao = require('./dogs');

funcao(function(greetings, message) {
    console.log(`${greetings}`)

    setTimeout(() => {
        console.log(`${message}`);
    }, 3000);
});

console.log("\n...the end? It's over?!");