'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Usuario = require('../models/usuario')

var ComentarioBlogSchema = Schema({
    textoBlog:String,
    idUsuarioBlog: { type: Schema.ObjectId, ref: 'BlogTico' },
    idForoBlog: { type: Schema.ObjectId, ref: 'BlogTico' }
});

module.exports = mongoose.model('ComentarioBlog', ComentarioBlogSchema);
//BlogTico --> Guardar Doc