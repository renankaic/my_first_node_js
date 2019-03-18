let express = require('express');
let routes = express.Router();

//Creates a second route and return a JSON
routes.get("/", (req, res) => {

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

//Creates a third route and return
routes.get("/admin", (req, res) => {
    
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.json({
        users: []
    });

});

//Exports the module
module.exports = routes;