//RUTAS DE FILMS

const Films = require('../models/film_model')
const express = require('express')
const winston = require('winston')
const router = express.Router()
const auth = require ("../middleware/auth")

//VER TODO
router.get('/all', async (req, res) => {
     res.send (await Films.find({}))
})

//SELECCIONAR POR TITULO 
router.get('/search/:title', async (req, res) => {
    res.send (await Films.findOne({title: { $regex: req.params.title, $options:'i' } }))
})

//OBTENER UN NUMERO DE PELICULAS ALEATORIAS.
router.get('/random/:n', async (req, res) => {
    res.send (await Films.aggregate([{ $sample: { size: Number(req.params.n) } }]))
});

//CREAR NUEVA ENTRADA FILM
router.post('/create', async (req, res) => {
    
    const film = new Films(req.body) 
    const newFilm = await film.save()
    res.send(newFilm)
    winston.info('Nuevo pelicula añadida a la base de datos.')
})

//CREAR UN NUEVO COMENTARIO EN FILMS
router.put('/edit/:title', async (req, res) => {
    // console.log(req.body)

    const film = await Films.findOneAndUpdate({title: req.params.title}, {$push: {comments: req.body}})
  

    res.send(film)
    winston.info(`Editado: ${req.params.title}`)
})



module.exports = router