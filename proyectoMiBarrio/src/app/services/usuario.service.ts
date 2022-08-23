import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class UsuarioService {
  public listaUsuarios: Array<Usuario> = Array<Usuario>();
  public usuario: Usuario = new Usuario("", "", "", 0, "");

  constructor(private http: HttpClient, private router: Router) {
    this.listaUsuarios = []
  }

  getUsuario(): Array<Usuario> {
    return this.listaUsuarios;
  }

  postUsuario(url: string, nuevo: {}) {
    this.http.post<Usuario>(url, nuevo).subscribe(data => {
      this.listaUsuarios = [this.usuario];
    })
  }
  Login(url: string, nuevo: {}) {
    this.http.post(url, nuevo).subscribe(data => {
      console.log((data as Array<any>)[0]._id)

      localStorage.setItem('_id', (data as Array<any>)[0]._id);

      if ((data as Array<any>).length == 0){
        console.log("SORRY USUARIO O PASSWORD EQUIVOCADO")
      }

      else{
        console.log("Inicio sesión correctamente")
        this.router.navigate(['/MenuVisitante'])
      }
    })

  }
}
