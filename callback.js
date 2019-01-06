module.exports = function(callback) {
    /**
     * Função anônima passando uma outra função como parâmetro (callback);
     * @param {function} - callback
     */
    console.log('1. Executando function sincrona');

    setTimeout(() => {
        /**
         * Função callback retornando dois parâmetros:
         * @param {string} - 'callback executado'
         * @param {number} - 10
         */
        callback('Callback executado', 10);
    }, 5000);
}