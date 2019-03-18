let express = require('express');
let routes = express.Router();

//Creates the first route and return an answer
routes.get('/', (req, res) => {

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.statusCode = 200;
    res.end("<h1>Olá!</h1>");

});

//Exports the module
module.exports = routes;