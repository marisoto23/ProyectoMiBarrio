'use strict'

var express = require('express');
var BlogTicoController = require('../controllers/blog-tico');

var router = express.Router();

//CARGA DE LAS RUTAS
router.post('/CrearBlogTico', BlogTicoController.crearBlogTico)
router.get('/BlogTico/:id?', BlogTicoController.obtenerBlogTico);
router.get('/BlogTicos', BlogTicoController.obtenerBlogTicos);
router.put('/ModificarBlogTico/:id', BlogTicoController.modificarBlogTico);
router.delete('/BorrarBlogTico/:id', BlogTicoController.borrarBlogTico);

//EXPORTAR RUTA PRINCIPAL
module.exports = router;