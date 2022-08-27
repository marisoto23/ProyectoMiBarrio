import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../models/restaurante';
import { RestauranteService } from '../services/restaurante.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registro-foro',
  templateUrl: './registro-foro.component.html',
  styleUrls: ['./registro-foro.component.css'],
  providers: [RestauranteService, UsuarioService]
})
export class RegistroForoComponent implements OnInit {
  public listaRestaurantes: Array<Restaurante> = Array<Restaurante>();
  public restaurante: Restaurante = new Restaurante("","","", "", "", "", "");

  constructor(public _restauranteService: RestauranteService, public _usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }

  agregarRestaurante(){
    console.log(this.restaurante)
    this._restauranteService.postRestaurante('http://localhost:3700/Restaurante/CrearRestaurante',
    {
      nombreRestaurante: this.restaurante.nombreRestaurante,
      categoria: this.restaurante.categoria,
      ubicacion: this.restaurante.ubicacion,
      paginaWeb: this.restaurante.paginaWeb,
      redSocial: this.restaurante.redSocial,
      autor: localStorage.getItem('nombreUsuario')
      //tipoUsuario : this.usuario.tipoUsuario,
    })
  }
}
