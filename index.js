//Require the express package
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

//Instantiates the Express
let app = express();

app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

//Includes all routes from "routes" folder into app
consign().include('routes').include('utils').into(app);

//Starts the server
app.listen(3000, "localhost", () => {

    console.log("Servidor está rodando");

});