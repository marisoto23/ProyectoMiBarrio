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
  public usuario:Usuario = new Usuario("","","",0,"");

  constructor(public user: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  ingresarUsuario(){
    this.user.Login('http://localhost:3700/api/Ingreso',
    {
      nombreUsuario : this.usuario.nombreUsuario,
      password : this.usuario.password,
      //tipoUsuario : this.usuario.tipoUsuario,
    })

  }
}
