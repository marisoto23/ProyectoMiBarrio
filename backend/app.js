'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//CARGAR LAS RUTAS DEL API
var usuario_routes = require('./routes/usuario');
var restaurante_routes = require('./routes/restaurante');
var blogTico_routes = require('./routes/blog-tico');
var comentarioBlog_routes = require('./routes/comentario-blog');

//MIDDLEWARES
//Corre antes que el API y así lo convierte en JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CONFIGUTACIÓN CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//RUTAS
app.use('/Usuario', usuario_routes) //antes aqui decía API c:
app.use('/Restaurante', restaurante_routes) 
app.use('/BlogTico', blogTico_routes) 
app.use('/ComentarioBlog', comentarioBlog_routes) 

//EXPORTAR
module.exports = app;