//RUTAS DE USERS

const express = require('express')
const winston = require('winston')
const bcrypt = require("bcrypt");
const {Users} = require('../models/user_model')
const router = express.Router()


router.get('/all', async (req, res) => {
    
    res.send (await Users.find({}))
    
})

//CREAR NUEVO USUARIO
router.post('/create', async (req, res) => {
    let user = await Users.findOne({$or: [{username: req.body.username}, {email: req.body.email}]});
    if (user) return res.status(400).send("Ya existe un usuario registrado con ese nombre o e-mail.");


    user = new Users(req.body); 

    const salt = await bcrypt.genSalt(10);
    console.log(salt)
    const hash = await bcrypt.hash(user._password, salt);

    user._password = hash;
    const newUser = await user.save()

    res.send({username: user.username, email: user.email})
    winston.info('Nuevo/a usuario/a en la la base de datos.')
})

//EDITAR USUARIO
router.put('/edit/:username', async (req, res) => {
    const user = await Users.findOneAndUpdate({id: req.params.username}, req.body)
    res.send(user)
    winston.info(`Editado: ${req.params.username}`)
})



module.exports = router