const funcao = require('./callback');

// função síncrona
funcao(function(string, numero) {
    console.log(`2. Resposta: ${string}`);
    
    numero += 10;
    console.log(`3. Resultado: ${numero}`);
});