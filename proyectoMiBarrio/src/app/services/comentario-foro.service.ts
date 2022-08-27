import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ComentarioForo } from "../models/comentario-foro";

@Injectable()
export class ComentarioForoService {
  public url: string;
  public listaComentarioForos: Array<ComentarioForo> = Array<ComentarioForo>();
  public comentario: ComentarioForo = new ComentarioForo("","", "", "");

  constructor(
    private _http: HttpClient
  ) {
    this.url = 'http://localhost:3700/ComentarioForo/'
  }

  getComentarioForos(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'ComentarioForos', { headers: headers });
  }

  guardarComentarioForo(url: string, nuevo: {}) {
    this._http.post<ComentarioForo>(url, nuevo).subscribe(data => {
      this.listaComentarioForos = [this.comentario];
    })
  }
}
