'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Usuario = require('../models/usuario')

var ComentarioForoSchema = Schema({
    textoForo:String,
    idUsuarioForo: { type: Schema.ObjectId, ref: 'Restaurante' },
    idForo: { type: Schema.ObjectId, ref: 'Restaurante' }
});

module.exports = mongoose.model('ComentarioForo', ComentarioForoSchema);
//BlogTico --> Guardar Doc