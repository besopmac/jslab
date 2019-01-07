const app = require('express')();

app.listen('3000', (req, res) => {
    console.log('servidor rodando');
});

app.get('/empregados/ti', (req, res) => {
    res.send(empregados);
});

app.post('/empregados/ti', (req, res) => {
    // onde posso criar um novo funcionário
    
    /**
     * adicionando novo funcionario
     */

    let novoFuncionario = {
        nome: req.headers.nome,
        funcao: req.headers.funcao
    };
    empregados.push(novoFuncionario);

    /**
     * Enviando mensagem ao servidor
     */
    res.send('Funcionário inserido com sucesso');
});

app.put('/empregados/:id/ti', (req, res) => {
    // :id é um parâmetro/chave que sempre retorna uma string
    for(const empregado of empregados) {
        if (empregado.nome === req.params.id) {
            res.send(empregado);
            return;
        }
    }
    res.send(`Não foi possível localizar o empregado ${req.params.id}`);
});


/**
 * Na prática
 */

const empregados = [
    {
        nome: 'Bruno',
        funcao: 'Front-End Dev'
    },
    {
        nome: 'Cristiano',
        funcao: 'Fullstack Dev'
    },
    {
        nome: 'Fábio',
        funcao: 'Product Owner'
    }
]