import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UsuarioService]
})
export class SignupComponent implements OnInit {
  listaUsuarios:Array<Usuario> = Array<Usuario>()
  public usuario:Usuario = new Usuario("","","",0,"");

  constructor(public user: UsuarioService) {}

  ngOnInit(): void {
  }

  agregarUsuario(){
    console.log(this.usuario)
    this.user.postUsuario('http://localhost:3700/Usuario/Registro',
    {
      nombre : this.usuario.nombre,
      nombreUsuario : this.usuario.nombreUsuario,
      email : this.usuario.email,
      telefono : this.usuario.telefono,
      password : this.usuario.password,
      //tipoUsuario : this.usuario.tipoUsuario,
    })
  }
}
