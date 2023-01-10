//SCHEMA - USERS

const mongoose = require('mongoose');
const Joi = require('joi')
const validator = require("../middleware/joiValidator");
const _ = require("lodash");

const commentsSchema = new mongoose.Schema({
    artwork_id: String, 
    artwork_title: String,
    comentary_t: String,
    comentary: String,
    date: Date,
    likes: Number,
    n: Number
})

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    _password: {
        type: String,
        required: true,
        unique:true,
    },
    url_user_img: String,
    reg_Date: Date,
    comments: [commentsSchema]

});

function validateComments(comments){
    const schema = Joi.object({
    artwork_id: Joi.string(),
    artwork_title: Joi.string(),  
    comentary_t: Joi.string(),
    comentary: Joi.string(),
    date: Joi.date(),
    likes: Joi.number(),
    n: Joi.number()
    })

    return schema.validate(comments)
}

function validateUsers(users){
    const schema = Joi.object({
        username: Joi.string()
        .required()
        .messages({ "any.required": `El nombre de usuario no es valido o está incompleto.` }),
        email: Joi.string()
        .email()
        .required()
        .messages({ "any.required": `El e-mail no es valido o está incompleto.` }),
        _password: Joi.string()
        .required()
        .messages({ "any.required": `La contraseña no es valida o está incompleta` }),
        url_user_img: Joi.string(),
        reg_Date: Joi.date(),
        comments: [validateComments]
    })

    return schema.validate(users)
}

//MODELS Y EXPORTAR MODULO

const Users = mongoose.model('Users', usersSchema)

module.exports = Users

module.exports.validate = validateUsers;