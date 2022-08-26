'use strict'

var BlogTico = require("../models/blog-tico");

var controller = {

    crearBlogTico: function(req, res){
        var blogTico = new BlogTico();

        var params = req.body;

        blogTico.tituloBlog = params.tituloBlog;
        blogTico.descripcionBlog = params.descripcionBlog;
        blogTico.explicacionBlog = params.explicacionBlog;
        blogTico.autorBlog = params.autorBlog;

        blogTico.save((err, blogTicoStored) =>{

            if(err) return res.status(500).send({message: 'Error al guardar documento'});

            if(!blogTicoStored) return res.status(404).send({message: 'No se ha podido almacenar el blog'});

            return res.status(200).send({blogTico, blogTicoStored});

        })

    },

    obtenerBlogTico: function(req, res){
		var blogTicoId = req.params.id;
		if(blogTicoId == null) return res.status(404).send({message: 'El blog no existe.'});

		BlogTico.findById(blogTicoId, (err, blogTico) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!blogTico) return res.status(404).send({message: 'El blog no existe.'});

			return res.status(200).send({
				blogTico
			});

		});
	},

	obtenerBlogTicos: function(req, res){

		BlogTico.find({}).sort().exec((err, blogTicos) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!blogTicos) return res.status(404).send({message: 'No hay blogs que mostrar.'});

			return res.status(200).send({blogTicos});
		});

	},

    modificarBlogTico: function(req, res){
		var blogTicoId = req.params.id;
		var update = req.body;

		BlogTico.findByIdAndUpdate(blogTicoId, update, {new:true}, (err, blogTicoUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!blogTicoUpdated) return res.status(404).send({message: 'No existe el blog para actualizar'});

			return res.status(200).send({
				blogTico: blogTicoUpdated
			});
		});

	},

	borrarBlogTico: function(req, res){
		var blogTicoId = req.params.id;

		BlogTico.findByIdAndRemove(blogTicoId, (err, blogTicoRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el blog'});

			if(!blogTicoRemoved) return res.status(404).send({message: "No se puede eliminar el blog."});

			return res.status(200).send({
				blogTico: blogTicoRemoved
			});
		});
	}    
}

module.exports = controller;