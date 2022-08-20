import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService{
  public listaUsuarios:Array<Usuario> = Array<Usuario>();
  public usuario:Usuario = new Usuario("","","",0,"",0);

  constructor(private http: HttpClient){
    this.listaUsuarios = []
  }

  getUsuario():Array<Usuario>{
    return this.listaUsuarios;
  }

  postUsuario(url:string,nuevo:{}){
    this.http.post<Usuario>(url,nuevo).subscribe(data => {
      this.listaUsuarios = [this.usuario];
  })
}
};
