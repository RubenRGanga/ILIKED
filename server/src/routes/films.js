//RUTAS DE FILMS

const Films = require('../models/film_model')
const express = require('express')
const winston = require('winston')
const router = express.Router()

//VER TODO
router.get('/all', async (req, res) => {
    
    res.send (await Films.find({}))
    
})

//SELECCIONAR POR TITULO 
router.get('/:title', async (req, res) => {
    res.send (await Films.findOne({title: { $regex: req.params.title, $options:'i' } }))
})

//CREAR NUEVA ENTRADA FILM
router.post('/create', async (req, res) => {
    const film = new Films(req.body) 
    const newFilm = await film.save()
    res.send(newFilm)
    winston.info('Nuevo pelicula añadida a la base de datos.')
})

//CREAR UN NUEVO COMENTARIO EN FILMS
router.put('/edit/:_id', async (req, res) => {
    const film = await Films.findOneAndUpdate({id: req.params._id}, req.body)
    res.send(film)
    winston.info(`Editado: ${req.params.title}`)
})



module.exports = router