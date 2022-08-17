'use strict'

var Usuario = require("../models/usuario");

var controller = {
    signupUsuario: (req, res, next) => {
        var usuario = new Usuario();

        var params = req.body; //Parametros en un arreglo

        usuario.nombre = params.nombre;
        usuario.nombreUsuario = params.nombreUsuario;
        usuario.email = params.email;
        usuario.telefono = params.telefono;
        usuario.password = params.password;
        usuario.tipoUsuario = params.tipoUsuario;

        usuario.save((err, usuarioStored)=>{
            if(err) return res.status(500).send({message: 'Error al guardar documento'});

            if(!usuarioStored) return res.status(404).send({message: 'No se pudo guardar'});

            return res.status(200).send({usuario, usuarioStored});
        });
    },
    loginUsuario: (req, res, next) => {
        const dataUsuario = {
            nombreUsuario: req.body.nombreUsuario,
            password: req.body.password,
        }
        Usuario.findOne({nombreUsuario: dataUsuario.nombreUsuario}, (err, usuario) =>{
            if (err) return res.status(500).send('Error de servidor');
    
            if(!nombreUsuario){ //Verifica si el usuario existe
                res.status(404).send({message: 'Error :('}); //Usuario no existe
            } else {
                const resultPassword = dataUsuario.password;
                if(resultPassword){ //Verifica contraseña
                    res.send({dataUsuario})
                } else {
                    res.status(404).send({message: 'Error :('}); //Contraseña incorrecta
                }
            }
        })
    }
}

module.exports = controller; //Para poder usarlo en el proyecto

