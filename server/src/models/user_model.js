//SCHEMA - USERS

const mongoose = require('mongoose');
const Joi = require('joi')

const usersSchema = new mongoose.Schema({
    username: String,
    email: String,
    _password: String,
    url_user_img: String,
    reg_Date: Date,
    comments: [{    "artwork_title": String, 
                    "artwork_id": String,
                    "comentary_t": String,
                    "comentary": String,
                    "date": Date,
                    "likes": Number,
                    "n": Number
                }]

});

function validateUsers(users){
    const schema = Joi.object({
        username: Joi.string(),
        email: Joi.string(),
        _password: Joi.string(),
        url_user_img: Joi.string(),
        reg_Date: Joi.date(),
        comments: [{    "artwork_title": Joi.string(), 
                        "artwork_id": Joi.string(),
                        "comentary_t": Joi.string(),
                        "comentary": Joi.string(),
                        "date": Joi.date(),
                        "likes": Joi.number(),
                        "n": Joi.number()
                    }]
    })

    return schema.validate(users)
}

//MODELS Y EXPORTAR MODULO

const Users = mongoose.model('Users', usersSchema)

module.exports = Users

module.exports.validate = validateUsers;