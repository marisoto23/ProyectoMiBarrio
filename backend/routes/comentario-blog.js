'use strict'

var express = require('express');
var ComentarioBlogController = require('../controllers/comentario-blog');

var router = express.Router();

//CARGA DE LAS RUTAS
router.post('/CrearComentarioBlog', ComentarioBlogController.crearComentarioBlog)
router.get('/ComentarioBlog/:id?', ComentarioBlogController.obtenerComentarioBlog);
router.get('/ComentarioBlogs', ComentarioBlogController.obtenerComentarioBlogs);
router.put('/ModificarComentarioBlog/:id', ComentarioBlogController.modificarComentarioBlog);
router.delete('/BorrarComentarioBlog/:id', ComentarioBlogController.borrarComentarioBlog);

//EXPORTAR RUTA PRINCIPAL
module.exports = router;