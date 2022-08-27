'use strict'

var express = require('express');
var UsuarioController = require('../controllers/usuario');

var router = express.Router();

//CARGA DE LAS RUTAS
//router.get('/', EstudianteController.home)
router.post('/Registro', UsuarioController.signupUsuario)
router.post('/Ingreso', UsuarioController.loginUsuario)
router.get('/Usuario:id', UsuarioController.obtenerUsuario)
router.put('/ConfigVisitante/:id', UsuarioController.modificarUsuario)
router.delete('/ConfigVisitante/:id', UsuarioController.borrarUsuario)

module.exports = router;