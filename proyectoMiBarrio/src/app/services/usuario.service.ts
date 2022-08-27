import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable , BehaviorSubject} from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable()
export class UsuarioService {
  public url : string;

  public listaUsuarios: Array<Usuario> = Array<Usuario>();
  public usuario: Usuario = new Usuario("","", "", "", 0, "");


  constructor(private http: HttpClient, private router: Router) {
    this.listaUsuarios = []
    this.url = 'http://localhost:3700/Usuario/'
  }

  getUsuario(id:number):Observable<any>{
    let headers =  new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.url+'Usuario/'+id, {headers:headers});
}


  postUsuario(url:string, nuevo: {}) {
    this.http.post<Usuario>(url, nuevo).subscribe(data => {
      this.listaUsuarios = [this.usuario];
    })
  }

  loginUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`http://localhost:3700/Usuario/Ingreso`,
      usuario).pipe(tap(
        (res: Usuario) => {
          if (res) {
            // guardar token
            console.log(this.usuario);
          }
        })
      );
    /*this.http.post<Usuario>(url, nuevo).subscribe(data => {
      this.router.navigate(['/MenuVisitante'])
    })*/
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
