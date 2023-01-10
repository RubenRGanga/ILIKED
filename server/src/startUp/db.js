//BASE DE DATOS

const mongoose = require('mongoose')
const winston = require('winston')

module.exports = function () {
    mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true})
   .then(() => winston.info("Conectado a MongoDB/iliked_db..."))
}
