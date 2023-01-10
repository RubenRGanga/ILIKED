//RUTAS DE USERS

const express = require('express')
const winston = require('winston')
const Users = require('../models/user_model')
const router = express.Router()


router.get('/all', async (req, res) => {
    
    res.send (await Users.find({}))
    
})

//CREAR NUEVO USUARIO
router.post('/create', async (req, res) => {
    const user = new Users(req.body) 
    const newUser = await user.save()
    res.send(newUser)
    winston.info('Nuevo/a usuario/a en la la base de datos.')
})

//EDITAR USUARIO
router.put('/edit/:username', async (req, res) => {
    const user = await Users.findOneAndUpdate({id: req.params.username}, req.body)
    res.send(user)
    winston.info(`Editado: ${req.params.username}`)
})



module.exports = router