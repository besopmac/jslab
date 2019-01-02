const app = require('express')();

app.listen('3000', (req, res) => {
    console.log('servidor rodando');
});

app.get('/dogs', (req, res) => {
    res.send(dogs);
});

app.post('/dogs', (req, res) => {
    res.send(req.headers);
});

app.put('/dogs/:id', (req, res) => {
    res.send(req.params);
});


/**
 * Usuando na prática
 */

const dogs = [
    {
        breed: 'Beagle',
        nome: 'Barney'
    },
    {
        breed: 'Rottweiler',
        nome: 'Marshall'
    },
    {
        breed: 'Mastin',
        nome: 'Opie'
    }
];