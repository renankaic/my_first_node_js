let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
})

//Exports the module
module.exports = (app) => {

    //Sets the initial route path for all requests
    let route = app.route("/users");

    //Creates a second route and return a JSON
    route.get((req, res) => {

        db.find({}).sort({name:1}).exec((err, users) => {

            if (err){

                app.utils.error.send(err, req, res);

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
    route.post((req, res) => {
        
        //res.json(req.body);

        db.insert(req.body, (err, user) => {

            if (err) {
                
                app.utils.error.send(err, req, res);

            } else {

                res.status(200).json(user);
                
            }

        });

    });

};