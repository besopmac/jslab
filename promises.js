// Promise Resolved
let promise1 = new Promise((resolve, reject) => {
    /**
     * 1. O que eu espero que aconteça:
     * Ao encerrar essa parte a Promise entra no estado fulfilled
     */
    setTimeout(() => {
        resolve('A promise 1 foi resolvida');
    }, 3000);
});

// Uma promise é executada com .then()
// promise1.then((resultado) => {
//     console.log(resultado);
// });


// Promise Rejected
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject('A promise 2 foi rejeitada');
        resolve('A promise 2 foi resolvida');
    }, 3000);
});

// Catch serve para tratar erros
// promise2.then((resultado) => {
//     console.log(resultado);
// }).catch((error) => {
//     console.error(error);
// });


/**
 * Promise.all()
 * 
 * O que fazer quando preciso executar mais de uma Promise ao mesmo tempo
 * e precisar esperar o resultado de todas elas antes de fazer alguma coisa?
 */

Promise.all([promise1, promise2])
    .then(([resultado1, resultado2]) => {
        console.log('Todas as promises foram resolvidas');
        console.log(resultado1);
        console.log(resultado2);
    }) 
    .catch((error) => {
        console.log('Uma das promises foi rejeitada');
        console.log(error);
    })