const { Users } = require("../models/user_model");
const Joi = require("joi");
const config = require("config");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const validator = require("../middleware/joiValidator");

const reqSchema = Joi.object({
    username: Joi.string()
    .required()
    .messages({ "any.required": `El nombre de usuario no es valido o está incompleto.` }),
    _password: Joi.string()
    .required()
    .messages({ "any.required": `La contraseña no es valida o está incompleta` }),
})

router.post("/login", validator(reqSchema), async (req, res) => {
    let user = await Users.findOne({ username: req.body.username });
    if (!user) return res.status(400).send("Usuario y password invalidos");
  
    const isValid = await bcrypt.compare(req.body._password, user._password);
    if (!isValid) return res.status(400).send("Usuario y password invalidos");
    
    const token = user.generateToken();
    res.header("x-auth-token", token).send("Usuario autentificado");
  });
  
  module.exports = router;