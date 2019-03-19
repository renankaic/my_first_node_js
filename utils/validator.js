module.exports = {

    user:(app,req, res) => {

        //Valides the "name" field
        req.assert('name', "O nome é obrigatório.").notEmpty();
        req.assert('email', "O e-mail está inválido.").notEmpty().isEmail();

        //Gets the errors from the request
        let errors = req.validationErrors();

        if (errors) {

            app.utils.error.send(errors, req, res);
            return false;

        } else {

            return true;

        }

    }

};