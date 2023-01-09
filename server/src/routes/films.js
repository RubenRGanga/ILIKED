//RUTAS DE FILMS

const Films = require('../models/film_model')
const express = require('express')
const router = express.Router()


router.get('/all', async (req, res) => {
    
    res.send (await Films.find({}))
    
})



module.exports = router