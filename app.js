// importando a função anônima e atribuindo a uma const
const funcao = require('./callback');

// função recebendo os dois parâmetros enviados pela função callback: string e numero
funcao(function(string, numero) {
    console.log(`2. Resposta: ${string}`);
    
    numero += 10;
    console.log(`3. Resultado: ${numero}`);
});