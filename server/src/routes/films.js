//RUTAS DE FILMS

const Films = require('../models/film_model')
const express = require('express')
const winston = require('winston')
const router = express.Router()
const auth = require ("../middleware/auth")
const mongoose = require('mongoose')

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
router.post('/create', auth, async (req, res) => {
    
    const {_id: user_id, username} = req.user
    winston.info(req.user)

    const commentBody = {...req.body, user_id, username}
    winston.info(commentBody)
    // const film = new Films({commentBody, _id: new mongoose.Types.ObjectId()});
    // const film = new Films({...req.body, ...commentBody});
    const film = new Films({...req.body, _id: new mongoose.Types.ObjectId()}, {$push: {comments: commentBody}});
    const newFilm = await film.save()
    res.send(newFilm)
    winston.info('Nuevo pelicula añadida a la base de datos.')
})

//CREAR UN NUEVO COMENTARIO EN FILMS
router.put('/edit/:title', auth, async (req, res) => {

    const {_id: user_id, username} = req.user

    const commentBody = {...req.body, user_id, username}
    const film = await Films.findOneAndUpdate({title: req.params.title}, {$push: {comments: commentBody}})
  

    res.send(film)
    winston.info(`Editado: ${req.params.title}`)
})



module.exports = router