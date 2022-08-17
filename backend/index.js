'use strict'

//console.log("Hola Mundo desde NodeJS!!!");

var mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/MiBarrio';

var app = require('./app')
var port = 3700;

mongoose.Promise = global.Promise;

mongoose.connect(url)
        .then(() => {
            console.log("Conexión a BD Exitosa!!!");

            //CREAR SERVIDOR
            app.listen(port, ()=> {
                console.log("Servidor Exitoso!!!");
            })
        })
        .catch(err => {
            console.log(err);
        })