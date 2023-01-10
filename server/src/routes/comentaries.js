//RUTAS DE COMENTARIES

const  Comentaries = require('../models/comentary_model')
const express = require('express')
const router = express.Router()


router.get('/all', async (req, res) => {
    
    res.send (await Comentaries.find({}))
    
})



module.exports = router