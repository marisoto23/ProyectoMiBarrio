import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../models/restaurante';
import { RestauranteService } from '../services/restaurante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config-foro',
  templateUrl: './config-foro.component.html',
  styleUrls: ['./config-foro.component.css'],
  providers: [RestauranteService]
})
export class ConfigForoComponent implements OnInit {

  public restaurantes: Restaurante[];
  public restaurante: Restaurante;

  constructor( private router: Router, private _restauranteService:RestauranteService) {
    this.restaurantes = [];
    this.restaurante = new Restaurante("","","", "", "", "", "63054156ebea11f36604877b");
   }

  ngOnInit(): void {
    this.obtenerRestaurantes()
  }

  obtenerRestaurantes(){
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

  actualizarRestaurante(){

    this._restauranteService.updateRestaurante('http://localhost:3700/Restaurante/ModificarRestaurante/6307d821849be0cf88330a27',
    {
      idRestaurante: "6307d821849be0cf88330a27",
      nombreRestaurante: this.restaurante.nombreRestaurante,
      categoria : this.restaurante.categoria,
      ubicacion : this.restaurante.ubicacion,
      paginaWeb : this.restaurante.paginaWeb,
      redSocial : this.restaurante.redSocial,
      autor : "6307ced83ff9747e679ed26d"
    })
    console.log('Guardado')
    this.router.navigateByUrl('/MenuVisitante');
  }

  borrarRestaurante(d: string){}
}
