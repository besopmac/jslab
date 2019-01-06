// Criando instância do Express
const app = require('express')();

/**
 * Recrie a API do tutorial, baseado no projeto Card Dogs
 * 
 * @param {string} breed - A raça do cão.
 * @param {string} subBreed - O grupo da raça do cão.
 * @param {number} friendliness - O nível de simpatia da raça entre 1 e 12.
 * @param {number} intelligence - O nível de inteligência da raça entre 1 e 12.
 * @param {string} shedding - O nível de caimento de pêlo da raça. 
 * @param {number} averageLife - O tempo médio de vida da raça.
 */

const dogs = [
    {
        breed: 'Beagle',
        subBreed: 'Hound',
        friendliness: 8,
        intelligence: 8,
        shedding: 'frequently',
        averageLife: 13
    },
    {
        breed: 'Dachshund',
        subBreed: 'Hound',
        friendliness: 7,
        intelligence: 7,
        shedding: 'frequently',
        averageLife: 12.7
    },
    {
        breed: 'Labrador',
        subBreed: 'Retriever Gun',
        friendliness: 9,
        intelligence: 8,
        shedding: 'rare',
        averageLife: 13
    }
];


// Escutando a porta do servidor
app.listen('4000', (req, res) => {
    console.log('Servidor OK');
});

// Pegar todos os dados (GET)
app.get('/all', (req, res) => {
    res.send(dogs);
});

// Criando novas raças
app.post('/add', (req, res) => {
    
    // coletando dados dos headers e atribuindo a objeto
    let newDog = {
        breed: req.headers.breed,
        subBreed: req.headers.subbreed,
        friendliness: req.headers.friendliness,
        intelligence: req.headers.intelligence,
        shedding: req.headers.shedding,
        averageLife: req.headers.averagelife
    };

    // inserindo o novo item a lista principal
    dogs.push(newDog);

    // informando o sucesso da operação
    res.send(req.headers);
});

// Localiza as informações sobre a ração
app.put('/details/:id', (req, res) => {
    for (const dog of dogs) {

        /**
         * SE a raça do item for igual ao id da requisição:
         * 1. Retorne o item completo
         */
        if (dog.breed === req.params.id) {
            res.send(dog);
            return;
        }
    }

    /**
     * SE a raça não for encontrada:
     * 1. Envie uma mensagem ao servidor com o ID não encontrado
     */
    res.send(`Não foi possível localizar ${req.params.id}`);
});
