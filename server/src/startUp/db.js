//BASE DE DATOS

const mongoose = require('mongoose')

module.exports = function () {
    mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true})
   .then(() => console.log("Conectado a MongoDB/Iliked..."))
}
