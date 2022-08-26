'use strict'

var express = require('express');
var RestauranteController = require('../controllers/restaurante');

var router = express.Router();

//CARGA DE LAS RUTAS
//router.get('/', EstudianteController.home)
router.post('/CrearRestaurante', RestauranteController.crearRestaurante)
router.get('/Restaurante/:id?', RestauranteController.obtenerRestaurante);
router.get('/Restaurantes', RestauranteController.obtenerRestaurantes);
router.put('/ModificarRestaurante/:id', RestauranteController.modificarRestaurante);
router.delete('/BorrarRestaurante/:id', RestauranteController.borrarRestaurante);

module.exports = router;