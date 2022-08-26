'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Usuario = require('../models/usuario')

var BlogTicoSchema = Schema({
    tituloBlog:String,
    descripcionBlog:String,
    explicacionBlog:String,
    autorBlog: { type: Schema.ObjectId, ref: 'Usuario' }
});

module.exports = mongoose.model('BlogTico', BlogTicoSchema);
//BlogTico --> Guardar Doc