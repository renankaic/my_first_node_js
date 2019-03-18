//Exports the module
module.exports = (app) => {

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

    //Creates a third route and return
    app.get("/users/admin", (req, res) => {
        
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.json({
            users: []
        });

    });

};