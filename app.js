const app = require('express')();

app.listen('3000', (req, res) => {
    console.log('servidor rodando');
});

app.get('/dogs', (req, res) => {
    res.send(dogs);
});

app.post('/dogs', (req, res) => {
    
});

app.put('/dogs/:id', (req, res) => {
    res.send(req.params);
});


/**
 * Usuando na prática
 */

const dogs = [
    {
        name: 'Barney',
        breed: 'Beagle'
    },
    {
        name: 'Marshall',
        breed: 'Rottweiler'
    },
    {
        name: 'Opie',
        breed: 'Mastin Tibetano'
    }
];