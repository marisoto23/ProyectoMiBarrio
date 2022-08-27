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
            _id: req.body._id,
            nombreUsuarioId: req.body.nombreUsuario,
            passwordId: req.body.password,
        }

        Usuario.findOne({ nombreUsuarioId: userData.nombreUsuarioId }, (err, usuarioDB) => {
            if (err) return res.status(500).send('Error de servidor');

            if (!usuarioDB) { //Verifica si el usuario existe
                res.status(404).send({ message: 'Usuario o contraseña incorrectos' }); //Usuario no existe
            }
            if (bcrypt.compareSync(userData.passwordId, usuarioDB.password)) {
                res.status(404).send({ message: 'Usuario o contraseña incorrectos' }); //Usuario no existe
            }
            //Genera token de autenticacion
            return res.status(200).send({ userData, usuarioDB });
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
}

module.exports = controller; //Para poder usarlo en el proyecto

