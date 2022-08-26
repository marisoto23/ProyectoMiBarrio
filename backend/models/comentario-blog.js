'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Usuario = require('../models/usuario')

var ComentarioBlogSchema = Schema({
    textoBlog:String,
    idUsuarioBlog: { type: Schema.ObjectId, ref: 'BlogTIco' },
    idForoBlog: { type: Schema.ObjectId, ref: 'BlogTIco' }
});

module.exports = mongoose.model('ComentarioBlog', ComentarioBlogSchema);
//BlogTico --> Guardar Doc