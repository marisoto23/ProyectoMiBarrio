'use strict'

var Usuario = require("../models/usuario");
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var controller = {
    signupUsuario: (req, res, next) => {
        var usuario = new Usuario();

        var params = req.body; //Parametros en un arreglo

        usuario.nombre = params.nombre;
        usuario.nombreUsuario = params.nombreUsuario;
        usuario.email = params.email;
        usuario.telefono = params.telefono;
        usuario.password = params.password;
        //usuario.tipoUsuario = params.tipoUsuario;

        usuario.save((err, usuarioStored) => {
            if (err) return res.status(500).send({ message: 'Error al guardar documento' });

            if (!usuarioStored) return res.status(404).send({ message: 'No se pudo guardar' });

            return res.status(200).send({ usuario, usuarioStored });

        });
    },
    loginUsuario: (req, res) => {
        var userData = {
            nombreUsuarioId: req.body.nombreUsuario,
            passwordId: req.body.password,
        }

        Usuario.findOne({ nombreUsuarioId: userData.nombreUsuarioId }, (err, usuario) => {
            if (err) return res.status(500).send('Error de servidor');

            if (!usuario) { //Verifica si el usuario existe
                res.status(404).send({ message: 'Usuario o contraseña incorrectos' }); //Usuario no existe
            }
            if (bcrypt.compareSync(userData.passwordId, usuario.password)) {
                res.status(404).send({ message: 'Usuario o contraseña incorrectos' }); //Usuario no existe
            }
            //Genera token de autenticacion
            return res.status(200).send({ userData, usuario });
        })
    },
    obtenerUsuario: function(req, res){
		var usuarioId = req.params.id;
		if(usuarioId == null) return res.status(404).send({message: 'El usuario no existe.'});

		Usuario.findById(usuarioId, (err, usuario) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!usuario) return res.status(404).send({message: 'El usuario no existe.'});

			return res.status(200).send({
				usuario
			});
		});
	},
    modificarUsuario: function(req, res){
		var UsuarioId = req.params.id;
		var update = req.body;

		Usuario.findByIdAndUpdate(UsuarioId, update, {new:true}, (err, usuarioUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!usuarioUpdated) return res.status(404).send({message: 'No existe el usuario para actualizarlo'});

			return res.status(200).send({
				usuario: usuarioUpdated
			});
		});

	},
    borrarUsuario: function(req, res){
		var usuarioId = req.params.id;

		Usuario.findByIdAndRemove(usuarioId, (err, usuarioRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el usuario'});

			if(!usuarioRemoved) return res.status(404).send({message: "No se puede eliminar el usuario."});

			return res.status(200).send({
				usuario: usuarioRemoved
			});
		});
	}
}

module.exports = controller; //Para poder usarlo en el proyecto

