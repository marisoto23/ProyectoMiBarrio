'use strict'

var express = require('express');
var ComentarioForoController = require('../controllers/comentario-foro');

var router = express.Router();

//CARGA DE LAS RUTAS
router.post('/CrearComentarioForo', ComentarioForoController.crearComentarioForo)
router.get('/ComentarioForo/:id?', ComentarioForoController.obtenerComentarioForo);
router.get('/ComentarioForos', ComentarioForoController.obtenerComentarioForos);
router.put('/ModificarComentarioForo/:id', ComentarioForoController.modificarComentarioForo);
router.delete('/BorrarComentarioForo/:id', ComentarioForoController.borrarComentarioForo);

//EXPORTAR RUTA PRINCIPAL
module.exports = router;