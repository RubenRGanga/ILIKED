//SCHEMA - COMENTARIES

const mongoose = require('mongoose');
const Joi = require('joi')

const comentariesSchema = new mongoose.Schema({
    username: String,
    user_id: String,
    artwork_title: String,
    artwork_id: String,
    date: Date,
    likes: Number,
    n: Number,
    comentary_t: String,
    comentary: String,
}, { timestamps: true });

function validateComentaries(comentaries){
    const schema = Joi.object({
        username: Joi.string(),
        user_id: Joi.string(),
        artwork_title: Joi.string(),
        artwork_id: Joi.string(),
        date: Joi.date(),
        likes: Joi.number(),
        n: Joi.number(),
        comentary_t: Joi.string(),
        comentary: Joi.string(),
    })

    return schema.validate(comentaries)
}

//MODELS Y EXPORTAR MODULO

const Comentaries = mongoose.model('Comentaries', comentariesSchema)

module.exports = Comentaries

module.exports.validate = validateComentaries;