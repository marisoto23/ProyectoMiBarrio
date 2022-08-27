import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../models/restaurante';
import { RestauranteService } from '../services/restaurante.service';
import { Global } from '../services/global';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-menu-visitante',
  templateUrl: './menu-visitante.component.html',
  styleUrls: ['./menu-visitante.component.css'],
  providers: [RestauranteService, UsuarioService]
})
export class MenuVisitanteComponent implements OnInit {
  public url:string;
  public restaurantes: Restaurante[];
  public restaurante: Restaurante;
  constructor(
    private _restauranteService:RestauranteService,
    private _usuarioService:UsuarioService
  ) {
    this.url = Global.url;
    this.restaurantes = [];
    this.restaurante = new Restaurante("","","", "", "", "", "63054156ebea11f36604877b");
   }

  ngOnInit(): void {
    var datoId = localStorage.getItem('nombreUsuario');
    console.log(datoId)
    this.getRestaurantes();
    this.obtenerUsuario()
  }

  getRestaurantes(){
    this._restauranteService.getRestaurante().subscribe(
      response => {
        if(response.restaurantes){
          this.restaurantes = response.restaurantes
        }
        console.log(this.restaurantes);
      },

      error => console.log(<any>error)
    )
  }
  obtenerUsuario(){
    this._restauranteService.obtenerRestaurante().subscribe(
      response => {
        if(response.restaurante){
          this.restaurante = response.restaurante
        }
        console.log(this.restaurante);
      },

      error => console.log(<any>error)
    )
  }
}
