import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {

  public usuarios: Usuario[];
  public usuario: Usuario;

  constructor(public user: UsuarioService, private router: Router) {
    this.usuarios = [];
    this.usuario = new Usuario ('','','','',0,'');
  }

  ngOnInit() {
  }

  ingresarUsuario(){
    console.log(this.usuario)
    this.user.loginUsuario('http://localhost:3700/Usuario/Ingreso',
    {
      nombre : this.usuario.nombre,
      nombreUsuario : this.usuario.nombreUsuario,
      email : this.usuario.email,
      telefono : this.usuario.telefono,
      password : this.usuario.password,
      //tipoUsuario : this.usuario.tipoUsuario,
    })
  }

  public get UsuarioNombre(){
    return localStorage.setItem('nombreUsuario', this.usuario.nombreUsuario)
  }

  public get UsuarioPassword(){
    return localStorage.getItem('password')
  }

}
