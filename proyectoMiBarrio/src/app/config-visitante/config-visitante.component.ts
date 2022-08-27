import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-config-visitante',
  templateUrl: './config-visitante.component.html',
  styleUrls: ['./config-visitante.component.css'],
  providers: [UsuarioService]
})
 
export class ConfigVisitanteComponent implements OnInit {
  
  constructor(private _usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }
  eliminarUsuario(id:any){
    this._usuarioService.eliminarUsuario(id).subscribe();
  }
  
}
