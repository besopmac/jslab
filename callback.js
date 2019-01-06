module.exports = function(callback) {
    console.log('1. Executando function sincrona');

    setTimeout(() => {
        callback('Callback executado', 10);
    }, 5000);
}