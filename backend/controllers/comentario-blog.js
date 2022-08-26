'use strict'

var ComentarioBlog = require("../models/comentario-blog");

var controller = {

    crearComentarioBlog: function(req, res){
        var comentarioBlog = new ComentarioBlog();

        var params = req.body;

        comentarioBlog.textoBlog = params.textoBlog;
        comentarioBlog.idUsuarioBlog = params.idUsuarioBlog;
        comentarioBlog.idForoBlog = params.idForoBlog;

        comentarioBlog.save((err, comentarioBlogStored) =>{

            if(err) return res.status(500).send({message: 'Error al guardar documento'});

            if(!comentarioBlogStored) return res.status(404).send({message: 'No se ha podido almacenar el comentario'});

            return res.status(200).send({comentarioBlog, comentarioBlogStored});

        })

    },

    obtenerComentarioBlog: function(req, res){
		var comentarioBlogId = req.params.id;
		if(comentarioBlogId == null) return res.status(404).send({message: 'El comentario no existe.'});

		ComentarioBlog.findById(comentarioBlogId, (err, comentarioBlog) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!comentarioBlog) return res.status(404).send({message: 'El comentario no existe.'});

			return res.status(200).send({
				comentarioBlog
			});

		});
	},

	obtenerComentarioBlogs: function(req, res){

		ComentarioBlog.find({}).sort().exec((err, comentarioBlogs) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!comentarioBlogs) return res.status(404).send({message: 'No hay comentarios que mostrar.'});

			return res.status(200).send({comentarioBlogs});
		});

	},

    modificarComentarioBlog: function(req, res){
		var comentarioBlogId = req.params.id;
		var update = req.body;

		ComentarioBlog.findByIdAndUpdate(comentarioBlogId, update, {new:true}, (err, comentarioBlogUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!comentarioBlogUpdated) return res.status(404).send({message: 'No existe el comentario para actualizar'});

			return res.status(200).send({
				comentarioBlog: comentarioBlogUpdated
			});
		});

	},

	borrarComentarioBlog: function(req, res){
		var comentarioBlogId = req.params.id;

		ComentarioBlog.findByIdAndRemove(comentarioBlogId, (err, comentarioBlogRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el blog'});

			if(!comentarioBlogRemoved) return res.status(404).send({message: "No se puede eliminar el comentario."});

			return res.status(200).send({
				comentarioBlog: comentarioBlogRemoved
			});
		});
	}    
}

module.exports = controller;