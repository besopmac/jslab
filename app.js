const app = require('express')();

app.listen('3000', (req, res) => {
    console.log('servidor rodando');
});

app.get('/dogs', (req, res) => {
    res.send(req.query);
});

app.post('/dogs', (req, res) => {
    res.send('Post OK');
});