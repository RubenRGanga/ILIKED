//RUTAS DE USERS

const Films = require('../models/user_model')
const express = require('express')
const Users = require('../models/user_model')
const router = express.Router()


router.get('/all', async (req, res) => {
    
    res.send (await Users.find({}))
    
})



module.exports = router