import { Component, OnInit } from '@angular/core';
import { ComentarioForo } from '../models/comentario-foro';
import { ComentarioForoService } from '../services/comentario-foro.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css'],
  providers: [ComentarioForoService]
})
export class ForoComponent implements OnInit {
  public comentarios: ComentarioForo[];
  public comentario: ComentarioForo;
  public url:string;
  public CrearComentarioForo;
  public status: string;

  constructor(private _comentarioService:ComentarioForoService) {
    this.url = 'http://localhost:3700/ComentarioForo/'
    this.comentarios = [];
    this.comentario = new ComentarioForo("","","63054156ebea11f36604877b", "63083b16c5edc75cacaf0180");
    this.CrearComentarioForo = "";
    this.status = '';
   }

  ngOnInit(): void {
    this.obtenerComentarioForos();
  }
  obtenerComentarioForos(){
    this._comentarioService.getComentarioForos().subscribe(
      response => {
        if(response.comentarios){
          this.comentarios = response.comentarios
        }
        console.log(this.comentarios);
      },

      error => console.log(<any>error)
    )
  }

  agregarComentarioForo(){
    console.log(this.comentario)
    this._comentarioService.guardarComentarioForo('http://localhost:3700/ComentarioForo/CrearComentarioForo',
    {
      idComentForo : this.comentario.idComentForo,
      textoForo : this.comentario.textoForo,
      idUsuarioForo : '63054156ebea11f36604877b',
      idForo : '63083b16c5edc75cacaf0180'
    })
  }

}
