//SCHEMA - FILMS

const mongoose = require('mongoose');
const Joi = require('joi')

//Añadido por si tenia que ver con guardar El user al crear nueva pelicula

const config = require("config");
const jwt = require("jsonwebtoken");
const validator = require("../middleware/joiValidator");
const _ = require("lodash");

 //Fin de lo añadido 


const commentsSchema = new mongoose.Schema({
    user_id: String, 
    username: String,
    comentary_t: {
        type: String,
        required: true,
    },
    comentary: {
        type: String,
        required: true,
    },
    date: Date,
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users'}],

})

const filmsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    o_title: String,
    year: Number,
    director: {
        type: String,
        required: true,
    },
    cast: [String],
    url_img: String,
    url_imdb: String,
    url_video: String,
    comments: [commentsSchema]

}, { timestamps: true });

//Añadido por si tenia que ver con guardar El user al crear nueva pelicula

filmsSchema.methods.generateToken = function () {
    return jwt.sign(
      _.pick(this, ["_id", "username"]),
      config.get("jwtPrivateKey")
    );
  };

 //Fin de lo añadido 

function validateComments(comments){
    const schema = Joi.object({
    user_id: Joi.string(), 
    username: Joi.string(),
    comentary_t: Joi.string(),
    comentary: Joi.string(),
    date: Joi.date(),
    likes: Joi.array()
    })

    return schema.validate(comments)
}

function validateFilms(films){
    const schema = Joi.object({
    title: Joi.string(),
    o_title: Joi.string(),
    year: Joi.number(),
    director: Joi.string(),
    cast: [Joi.string()],
    url_img: Joi.string(),
    url_imdb: Joi.string(),
    url_video: Joi.string(),
    comments: [validateComments]
    })

    return schema.validate(films)
}

//MODELS Y EXPORTAR MODULO

const Films = mongoose.model('Films', filmsSchema)

module.exports = Films

module.exports.validate = validateFilms;