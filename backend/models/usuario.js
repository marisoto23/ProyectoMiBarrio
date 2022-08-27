'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema; //Crea un Schema = Tabla que sería coleccion

var UsuarioSchema = new Schema({
    nombre:String,
    nombreUsuario:String,
    email:String,
    telefono:Number,
    password:String
    //tipoUsuario:Number
});

module.exports = mongoose.model('Usuario',UsuarioSchema);


