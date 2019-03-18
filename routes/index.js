//Exports the module
module.exports = (app) => {

    //Creates the first route and return an answer
    app.get('/', (req, res) => {

        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.statusCode = 200;
        res.end("<h1>Olá!</h1>");

    });

};