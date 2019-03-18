let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
})

//Exports the module
module.exports = (app) => {

    //Creates a second route and return a JSON
    app.get("/users", (req, res) => {

        db.find({}).sort({name:1}).exec((err, users) => {

            if (err){

                console.log( `Erro: ${err}`  );
                res.status(400).json({
                    error: err
                });

            } else {

                res.statusCode = 200;
                res.setHeader("Content-Type", 'application/json');
                res.json({
                    users
                });

            }

        });

        /*
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.json({
            users: [{
                name: "Hcode",
                data: new Date().toLocaleDateString("pt-BR"),
                id: 1
            }]
        });*/



    });

    //Creates a third route and return
    //Uses POST
    app.post("/users", (req, res) => {
        
        //res.json(req.body);

        db.insert(req.body, (err, user) => {

            if (err) {
                
                console.log(`Erro: ${err}`);
                res.status(400).json({
                    error: err
                });

            } else {

                res.status(200).json(user);
                
            }

        });

    });

};