//RUTAS

const express = require('express');

const films = require('../routes/films');
const users = require('../routes/users')
const comentaries = require('../routes/comentaries')



const app = express();

module.exports = function (app) {

    app.use(express.json())

    app.use('/films', films) 
    app.use('/users', users)
    app.use('/comentaries', comentaries)
    

//PING

    app.get('/ping', (req, res) => {
        res.send('¡PONG!')
    })

}