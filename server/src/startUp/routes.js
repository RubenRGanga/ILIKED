//RUTAS

const express = require('express');

const films = require('../routes/films');


const app = express();

module.exports = function (app) {

    app.use(express.json())

    app.use('/films', films) 
    

//PING

    app.get('/ping', (req, res) => {
        res.send('¡PONG!')
    })

}