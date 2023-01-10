//RUTAS DE COMENTARIES

const  Comentaries = require('../models/comentary_model')
const express = require('express')
const router = express.Router()


router.get('/all', async (req, res) => {
    
    res.send (await Comentaries.find({}))
    
})

//CREAR NUEVA ENTRADA FILM
router.post('/create', async (req, res) => {
    const comentary = new Comentaries(req.body) 
    const newComentary = await comentary.save()
    res.send(newComentary)
    console.log('Nuevo comentario añadido a la base de datos.')
})

//CREAR UN NUEVO COMENTARIO EN FILMS
router.put('/edit/:artwork_title', async (req, res) => {
    const film = await Films.findOneAndUpdate({id: req.params.artwork_title}, req.body)
    res.send(film)
    console.log(`Editado: ${req.params.artwork_title}`)
})

module.exports = router