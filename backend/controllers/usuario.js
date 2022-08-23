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

        usuario.save((err, usuarioStored)=>{
            if(err) return res.status(500).send({message: 'Error al guardar documento'});

            if(!usuarioStored) return res.status(404).send({message: 'No se pudo guardar'});

            return res.status(200).send({usuario, usuarioStored});
            
        });
    },
    loginUsuario: (req, res) => {
        let body = req.body;
        
        Usuario.findOne({nombreUsuario: body.nombreUsuario}, (err, usuarioDB) =>{
            if (err) return res.status(500).send('Error de servidor');
    
            if(!usuarioDB){ //Verifica si el usuario existe
                res.status(400).send({message: 'Usuario o contraseña incorectos'}); //Usuario no existe
            } 
            if(!bcrypt.compareSync(body.password, usuarioDB.password)){
                res.status(400).send({message: 'Usuario o contraseña incorectos'}); //Usuario no existe
            }
            //Genera token de autenticacion
            let token = jwt.sign({
                usuario: usuarioDB,
            }, process.env.SEED_AUTHENTICATION, {
                expiresIn: process.env.CADUCIDAD_TOKEN
            })
            res.json({
                ok: true,
                usuario: usuarioDB,
                token,
            })
        })
    }
}

module.exports = controller; //Para poder usarlo en el proyecto

