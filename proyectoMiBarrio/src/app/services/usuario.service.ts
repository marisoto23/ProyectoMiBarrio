import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Injectable()
export class UsuarioService {
  url = 'http://localhost:3700/Usuario/';
  public listaUsuarios: Array<Usuario> = Array<Usuario>();
  public usuario: Usuario = new Usuario("","", "", "", 0, "");


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
  loginUsuario(url: string, nuevo: {}) {
    this.http.post<Usuario>(url, nuevo).subscribe(data => {
      this.router.navigate(['/MenuVisitante'])
    })
  }

  public get UsuarioNombre(){
    return localStorage.setItem('nombreUsuario', this.usuario.nombreUsuario)
  }
   eliminarUsuario(id: string):Observable<any>{
    return this.http.delete(this.url + id)
  }
  editarUsuario(id:string, usuario: Usuario):Observable<any>{
    return this.http.put(this.url + id, usuario)
  }
}
