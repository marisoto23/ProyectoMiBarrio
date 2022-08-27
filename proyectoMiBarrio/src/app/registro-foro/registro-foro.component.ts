import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../models/restaurante';
import { RestauranteService } from '../services/restaurante.service';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-foro',
  templateUrl: './registro-foro.component.html',
  styleUrls: ['./registro-foro.component.css'],
  providers: [RestauranteService, UsuarioService]
})
export class RegistroForoComponent implements OnInit {
  public listaRestaurantes: Array<Restaurante> = Array<Restaurante>();
  public restaurante: Restaurante = new Restaurante("","","", "", "", "", "63054156ebea11f36604877b");

  constructor(public _restauranteService: RestauranteService,
    public _usuarioService:UsuarioService,
    private router: Router) { }

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
      autor: this.restaurante.autor
      //tipoUsuario : this.usuario.tipoUsuario,
    })
    console.log('Se ingreso corectamente')
    this.router.navigateByUrl('/MenuVisitante');
  }
}
