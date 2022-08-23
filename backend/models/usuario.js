'use strict'

var mongoose = require('mongoose');

let rolesValidos = {
    values: ["ADMIN", "USER"],
    message: '{VALUE} no es un role válido'
}

var Schema = mongoose.Schema; //Crea un Schema = Tabla que sería coleccion

var UsuarioSchema = new Schema({
    nombre:String,
    nombreUsuario:String,
    email:String,
    telefono:Number,
    password:String,
    role: {
        type: String,
        default: 'USER',
        required: [true],
        enum: rolesValidos,
    },
    //tipoUsuario:Number
});

UsuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
 }

module.exports = mongoose.model('Usuarios',UsuarioSchema);


