//SCHEMA - USERS

const config = require("config");
const jwt = require("jsonwebtoken");
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
    likes: Array,
    n: Number
});

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
    },
    url_user_img: String,
    reg_Date: Date,
    comments: [commentsSchema]

});

usersSchema.methods.generateToken = function () {
    return jwt.sign(
      _.pick(this, ["_id", "username"]),
      config.get("jwtPrivateKey")
    );
  };

const Users = mongoose.model('Users', usersSchema)

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


const reqSchema = Joi.object({
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

exports.Users = Users;
exports.validateBody = validator(reqSchema);