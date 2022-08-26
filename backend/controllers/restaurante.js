'use strict'

var Restaurante = require("../models/restaurante");

var controller = {

    crearRestaurante: function(req, res){
        var restaurante = new Restaurante();

        var params = req.body;

        restaurante.nombreRestaurante = params.nombreRestaurante;
        restaurante.categoria = params.categoria;
        restaurante.ubicacion = params.ubicacion;
        restaurante.paginaWeb = params.paginaWeb;
        restaurante.redSocial = params.redSocial;
        restaurante.autor = params.autor;

        restaurante.save((err, restauranteStored) =>{

            if(err) return res.status(500).send({message: 'Error al guardar documento'});

            if(!restauranteStored) return res.status(404).send({message: 'No se ha podido almacenar el estudiante'});

            return res.status(200).send({restaurante, restauranteStored});

        })

    },

    obtenerRestaurante: function(req, res){
		var restauranteId = req.params.id;
		if(restauranteId == null) return res.status(404).send({message: 'El restaurante no existe.'});

		Restaurante.findById(restauranteId, (err, restaurante) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!restaurante) return res.status(404).send({message: 'El restaurante no existe.'});

			return res.status(200).send({
				restaurante
			});

		});
	},

	obtenerRestaurantes: function(req, res){

		Restaurante.find({}).sort().exec((err, restaurantes) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!restaurantes) return res.status(404).send({message: 'No hay restaurante que mostrar.'});

			return res.status(200).send({restaurantes});
		});

	},

    modificarRestaurante: function(req, res){
		var restauranteId = req.params.id;
		var update = req.body;

		Restaurante.findByIdAndUpdate(restauranteId, update, {new:true}, (err, restauranteUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!restauranteUpdated) return res.status(404).send({message: 'No existe el restaurante para actualizar'});

			return res.status(200).send({
				restaurante: restauranteUpdated
			});
		});

	},

	borrarRestaurante: function(req, res){
		var restauranteId = req.params.id;

		Restaurante.findByIdAndRemove(restauranteId, (err, restauranteRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el restaurante'});

			if(!restauranteRemoved) return res.status(404).send({message: "No se puede eliminar el restaurante."});

			return res.status(200).send({
				restaurante: restauranteRemoved
			});
		});
	}    
}

module.exports = controller;