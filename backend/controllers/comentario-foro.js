'use strict'

var ComentarioForo = require("../models/comentario-foro");

var controller = {

    crearComentarioForo: function(req, res){
        var comentarioForo = new ComentarioForo();

        var params = req.body;

        comentarioForo.textoForo = params.textoForo;
        comentarioForo.idUsuarioForo = params.idUsuarioForo;
        comentarioForo.idForo = params.idForo;

        comentarioForo.save((err, comentarioForoStored) =>{

            if(err) return res.status(500).send({message: 'Error al guardar documento'});

            if(!comentarioForoStored) return res.status(404).send({message: 'No se ha podido almacenar el comentario'});

            return res.status(200).send({comentarioForo, comentarioForoStored});

        })

    },

    obtenerComentarioForo: function(req, res){
		var comentarioForoId = req.params.id;
		if(comentarioForoId == null) return res.status(404).send({message: 'El comentario no existe.'});

		ComentarioForo.findById(comentarioForoId, (err, comentarioForo) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!comentarioForo) return res.status(404).send({message: 'El comentario no existe.'});

			return res.status(200).send({
				comentarioForo
			});

		});
	},

	obtenerComentarioForos: function(req, res){

		ComentarioForo.find({}).sort().exec((err, comentarioForos) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!comentarioForos) return res.status(404).send({message: 'No hay comentarios que mostrar.'});

			return res.status(200).send({comentarioForos});
		});

	},

    modificarComentarioForo: function(req, res){
		var comentarioForoId = req.params.id;
		var update = req.body;

		ComentarioForo.findByIdAndUpdate(comentarioForoId, update, {new:true}, (err, comentarioForoUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!comentarioForoUpdated) return res.status(404).send({message: 'No existe el comentario para actualizar'});

			return res.status(200).send({
				comentarioForo: comentarioForoUpdated
			});
		});

	},

	borrarComentarioForo: function(req, res){
		var comentarioForoId = req.params.id;

		ComentarioForo.findByIdAndRemove(comentarioForoId, (err, comentarioForoRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el comentario'});

			if(!comentarioForoRemoved) return res.status(404).send({message: "No se puede eliminar el comentario."});

			return res.status(200).send({
				comentarioForo: comentarioForoRemoved
			});
		});
	}    
}

module.exports = controller;