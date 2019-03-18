//Require the express package
const express = require('express');
const consign = require('consign');


//Instantiates the Express
let app = express();

//Includes all routes from "routes" folder into app
consign().include('routes').into(app);

//Starts the server
app.listen(3000, "localhost", () => {

    console.log("Servidor está rodando");

});