import { Injectable } from "@angular/core";
import { Restaurante } from "../models/restaurante";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from "./global";
import { Observable } from "rxjs";

@Injectable()
export class RestauranteService{
  public listaRestaurantes: Array<Restaurante> = Array<Restaurante>();
  public restaurante: Restaurante = new Restaurante("","","", "", "", "", "");

  public url:string;

  constructor(private http: HttpClient){
    this.url = Global.url
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
}
