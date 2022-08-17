'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//CARGAR LAS RUTAS DEL API
var usuario_routes = require('./routes/usuario')

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
app.use('/api', usuario_routes)

//EXPORTAR
module.exports = app;