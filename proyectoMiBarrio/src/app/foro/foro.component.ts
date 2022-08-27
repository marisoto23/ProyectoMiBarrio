import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../models/restaurante';
import { RestauranteService } from '../services/restaurante.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css'],
  providers: [RestauranteService]
})
export class ForoComponent implements OnInit {
  public restaurantes: Restaurante[];
  public restaurante: Restaurante;

  constructor(private _restauranteService:RestauranteService) {
    this.restaurantes = [];
    this.restaurante = new Restaurante("","","", "", "", "", "63054156ebea11f36604877b");
   }

  ngOnInit(): void {
    this.obtenerRestaurante();
  }
  obtenerRestaurante(){
    this._restauranteService.getRestaurante().subscribe(
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
