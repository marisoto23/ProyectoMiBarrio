import { Injectable } from "@angular/core";
import { Restaurante } from "../models/restaurante";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from "./global";
import { Observable } from "rxjs";

@Injectable()
export class RestauranteService{
  public url:string;

  constructor(private http: HttpClient){
    this.url = Global.url
  }

  getRestaurante():Observable<any>{
    let headers =  new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.url+'Restaurantes', {headers:headers});
  }
}
