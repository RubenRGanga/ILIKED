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

    req.body.comments = {...req.body.comments, user_id, username}

    winston.info(req.body)

    // req.body.comments.user_id = user_id
    // req.body.comments.username = username
    // const film = new Films({commentBody, _id: new mongoose.Types.ObjectId()});

    const film = new Films(req.body);
    const newFilm = await film.save()
    winston.info(req.body)
    res.send(newFilm)
    winston.info('Nueva pelicula añadida a la base de datos.')
})

//CREAR UN NUEVO COMENTARIO EN FILMS
router.put('/edit/:title', auth, async (req, res) => {

    const {_id: user_id, username} = req.user

    const commentBody = {...req.body, user_id, username}
    const film = await Films.findOneAndUpdate({title: req.params.title}, {$push: {comments: commentBody}})
  

    res.send(film)
    winston.info(`Editado: ${req.params.title}`)
})

//DAR LIKE A COMENTARIO DE OTRO USUARIO
router.post('/like', auth, async (req, res) => {
  
    const {_id: user_id} = req.user

    const {commentId} = req.body

    // const film = await Films.findOneAndUpdate({title, }, {$push: {comments: commentBody}})
  
    const film = await Films.findOne({ 'comments._id': commentId})

    const comment = film.comments.find((comment) => commentId === comment._id.toString() && !comment.likes.includes(user_id) && comment.user_id != user_id)
  

    if(comment) {
        comment.likes.push(user_id)
        film.save()
    }
   

    res.send(film)


    // winston.info(`Editado: ${req.params.title}`)
})

module.exports = router