'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Usuario = require('../models/usuario')

var RestauranteSchema = Schema({
    nombreRestaurante:String,
    categoria:String,
    ubicacion:String,
    paginaWeb:String,
    redSocial:String,
    autor: { type: Schema.ObjectId, ref: 'Usuario' }
});

module.exports = mongoose.model('Restaurante',RestauranteSchema);
//Restaurante --> Guardar Doc