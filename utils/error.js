/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable padded-blocks */
module.exports = {
    send: (err, req, res, code = 400) => {
        
        console.log(`Error: ${err}`);
        res.status(code).json({
            error: err,
        });
       
    },
};
