'use strict'

var express = require('express');
var UsuarioController = require('../controllers/usuario');

var router = express.Router();

//CARGA DE LAS RUTAS
//router.get('/', EstudianteController.home)
router.post('/Registro', UsuarioController.signupUsuario)
router.get('/Ingreso', UsuarioController.loginUsuario)

module.exports = router;