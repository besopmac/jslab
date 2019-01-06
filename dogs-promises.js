/**
 * Resolve
 */
let beagle = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Encontramos...');
    }, 3000);
});

beagle.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
});


/**
 * Reject
 */
let barney = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Não pegou o gato...');
    }, 4000);
});

barney.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
});


/**
 * Promise All
 */
Promise.all([beagle, barney])
    .then(([resultado1, resultado2]) => {
        console.log('Todas as promises foram executadas');
        console.log(resultado1);
        console.log(resultado2);
    })
    .catch((error) => {
        console.log('Uma das promises foi rejeitada');
        console.log(error);
    })