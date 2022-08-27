import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  //public usuarios : Usuario[];
  public usuario : Usuario;

  constructor(private user: UsuarioService, private router: Router) {
    //this.usuarios = [],
    this.usuario = new Usuario('','','','',0, '');
  }

  ngOnInit() {
    //this.getUsuario();
  }

  /*ingresarUsuario(){
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

  public get UsuarioPassword(){
    return localStorage.getItem('password')
  }*/
  onLogin(form: any): void {
    this.user.loginUsuario(form.value).subscribe(res => {
      /*localStorage.setItem('nombreUsuario',(res.nombreUsuario))
      if(!res.nombreUsuario){
        console.log('Usuario o contraseña incorrecta')
      }
      else{
        console.log('Inicio de sesion correcto')*/
        this.router.navigateByUrl('/MenuVisitante');
      })
    //});
  }
  /*getUsuario(){
    this.user.getUsuario().subscribe(
      response => {
        if (response.usuario){
          this.usuario = response.usuario
        }
        console.log(this.usuario);
      },

      error => console.log(<any>error)

    );
  };*/
}
