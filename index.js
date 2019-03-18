//Require the express package
const express = require('express');

let routesIndex = require('./routes/index.js');
let routesUsers = require('./routes/users.js');

//Instantiates the Express
let app = express();

//Tells to the app that he will use the new routes created above
app.use(routesIndex);
app.use('/users', routesUsers);

//Starts the server
app.listen(3000, "localhost", () => {

    console.log("Servidor está rodando");

});