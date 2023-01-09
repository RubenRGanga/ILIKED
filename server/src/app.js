//APP

const express = require('express')
const path = require('path');


require('dotenv').config()

const app = express();

require('./startUp/routes')(app)
require('./startUp/db')()

//PUERTO DE ESCUCHA

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`SERVIDOR CONECTADO EN: http://localhost:${port}`))