var express = require('express');
var bodyParser = require('body-parser');
var cors = require("cors");

var app = express();
var books = [
    {
        id: 1,
        name: 'O Chamado de Cthulhu',
        price: 10,
        quantity: 1,
        category: "Terror",
        img: "cthulhu"
    },
    {
        id: 1,
        name: 'Assim Falou Zaratustra',
        price: 10,
        quantity: 1,
        category: "Filosofia",
        img: "assim-falou-zaratustra"
    },
    {
        id: 1,
        name: 'Uma Breve História do Tempo',
        price: 10,
        quantity: 1,
        category: "Ciência",
        img: "uma-breve-historia-do-tempo"
    },
    {
        id: 1,
        name: '2001: Uma Odisseia no Espaço',
        price: 10,
        quantity: 1,
        category: "Sci-Fi",
        img: "Uma-Odisseia-no-Espaço"
    },
    
];

let corsOptions = {
    origin: "*"
}

app.use(bodyParser.json());

app.get('/books', cors(corsOptions), function(req, res) {
    res.send(JSON.stringify(books));
});

app.listen(8000, function() {
    console.log('Servidor rodando na porta 8000.');
});


