//RUTAS
require('express-async-errors')
const express = require('express');

const films = require('../routes/films');
const users = require('../routes/users')
const comentaries = require('../routes/comentaries')
const auths = require("../routes/auth");
const errors = require('../middleware/errors')



const app = express();

module.exports = function (app) {

    app.use(express.json())

    app.use('/films', films) 
    app.use('/users', users)
    app.use('/comentaries', comentaries)
    app.use('/auths', auths)
    

//PING

    app.get('/ping', (req, res) => {
        res.send('¡PONG!')
    })

    app.use(errors)

}