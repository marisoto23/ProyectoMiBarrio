import { Injectable } from "@angular/core";
import { Restaurante } from "../models/restaurante";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from "./global";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";

@Injectable()
export class RestauranteService{
  public listaRestaurantes: Array<Restaurante> = Array<Restaurante>();
  public restaurante: Restaurante = new Restaurante("","","", "", "", "", "");

  public url:string;
  public id:string;
  public usuario: Usuario

  constructor(private http: HttpClient){
    this.url = Global.url
    this.usuario = new Usuario("","","","",0,"")
    this.id = this.usuario.idUsuario
    this.listaRestaurantes = []
  }

  getRestaurante():Observable<any>{
    let headers =  new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.url+'Restaurantes', {headers:headers});
  }

  postRestaurante(url:string, nuevo: {}){
    this.http.post<Restaurante>(url, nuevo).subscribe(data => {
      this.listaRestaurantes = [this.restaurante];
    })
  }
  obtenerRestaurante():Observable<any>{
    let headers =  new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.url+'Restaurante/6307d821849be0cf88330a27', {headers:headers});
  }

  updateRestaurante(url:string, nuevo: {}){
    this.http.put<Restaurante>(url, nuevo).subscribe(data => {
      this.listaRestaurantes = [this.restaurante];
    })
  }

  deleteRestaurante():Observable<any>{
    let headers =  new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.delete(this.url+'Restaurante/', {headers:headers});
  }

  obtenerIdRestaurante():Observable<any>{
    let headers =  new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.url+'Restaurante/', {headers:headers});
  }
}
