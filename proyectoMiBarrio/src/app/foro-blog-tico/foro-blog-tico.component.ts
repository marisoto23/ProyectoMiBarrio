import { Component, OnInit } from '@angular/core';
import { BlogTico } from '../models/blog-tico';
import { BlogTicoService } from '../services/blog-tico.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-foro-blog-tico',
  templateUrl: './foro-blog-tico.component.html',
  styleUrls: ['./foro-blog-tico.component.css'],
  providers: [BlogTicoService, UsuarioService]
})
export class ForoBlogTicoComponent implements OnInit {
  public listaBlogTicos: Array<BlogTico> = Array<BlogTico>();
  public blogTico: BlogTico = new BlogTico("","","", "", "6305480d7a4ad48d6bfeb062");


  constructor(public _blogTicoService: BlogTicoService,
    public _usuarioService:UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  agregarBlogTico(){
    console.log(this.blogTico)
    this._blogTicoService.postBlogTico('http://localhost:3700/BlogTico/CrearBlogTico',
    {
      tituloBlog: this.blogTico.tituloBlog,
      descripcionBlog: this.blogTico.descripcionBlog,
      explicacionBlog: this.blogTico.explicacionBlog,
      autorBlog: this.blogTico.autorBlog
      //tipoUsuario : this.usuario.tipoUsuario,
    })
    console.log('Se ingreso corectamente')
    this.router.navigateByUrl('/BlogTico');
  }
}
