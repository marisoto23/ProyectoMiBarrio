import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../models/restaurante';
import { RestauranteService } from '../services/restaurante.service';
import { Global } from '../services/global';

@Component({
  selector: 'app-menu-visitante',
  templateUrl: './menu-visitante.component.html',
  styleUrls: ['./menu-visitante.component.css'],
  providers: [RestauranteService]
})
export class MenuVisitanteComponent implements OnInit {
  public url:string;
  public restaurantes: Restaurante[];
  public restaurante: Restaurante;
  constructor(
    private _restauranteService:RestauranteService
  ) {
    this.url = Global.url;
    this.restaurantes = [];
    this.restaurante = new Restaurante('','','','','', '');
   }

  ngOnInit(): void {
    this.getRestaurantes();
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
}
