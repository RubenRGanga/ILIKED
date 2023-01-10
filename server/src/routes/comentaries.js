//RUTAS DE COMENTARIES

const  Comentaries = require('../models/comentary_model')
const express = require('express')
const winston = require('winston')
const router = express.Router()


router.get('/all', async (req, res) => {
    
    res.send (await Comentaries.find({}))
    
})

//CREAR NUEVA ENTRADA FILM
router.post('/create', async (req, res) => {
    const comentary = new Comentaries(req.body) 
    const newComentary = await comentary.save()
    res.send(newComentary)
    winston.info('Nuevo comentario añadido a la base de datos.')
})

module.exports = router