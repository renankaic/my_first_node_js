//Require the express package
const express = require('express');

//Instantiates the Express
let app = express();

//Creates the first route and return an answer
app.get('/', (req, res) => {

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 200;
    res.end("<h1>Olá!</h1>");

});

//Creates a second route and return a JSON
app.get("/users", (req, res) => {

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.json({
        users: [{
            name: "Hcode",
            data: new Date().toLocaleDateString("pt-BR"),
            id: 1
        }]
    });

});

//Starts the server
app.listen(3000, "localhost", () => {

    console.log("Servidor está rodando");

});