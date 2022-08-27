import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogTico } from '../models/blog-tico';
import { BlogTicoService } from '../services/blog-tico.service';

@Component({
  selector: 'app-config-blog-tico',
  templateUrl: './config-blog-tico.component.html',
  styleUrls: ['./config-blog-tico.component.css'],
  providers: [BlogTicoService]
})
export class ConfigBlogTicoComponent implements OnInit {

  public blogTicos: BlogTico[];
  public blogTico: BlogTico;

  constructor(private router: Router, private _blogTicoService:BlogTicoService) {
    this.blogTicos = [];
    this.blogTico = new BlogTico("","","", "","63054156ebea11f36604877b");
  }

  ngOnInit(): void {
    this.obtenerBlogTicos()
  }

  obtenerBlogTicos(){
    this._blogTicoService.getBlogTicos().subscribe(
      response => {
        if(response.blogTicos){
          this.blogTicos = response.blogTicos
        }
        console.log(this.blogTicos);
      },

      error => console.log(<any>error)
    )
  }

  actualizarBlogTico(){

    this._blogTicoService.updateBlogTico('http://localhost:3700/BlogTico/ModificarBlogTico/6307d821849be0cf88330a27',
    {
      idRestaurante: "630834b06a2cfe4485285005",
      tituloBlog: this.blogTico.tituloBlog,
      descripcionBlog : this.blogTico.descripcionBlog,
      explicacionBlog : this.blogTico.explicacionBlog,
      autor : "6307ced83ff9747e679ed26d"
    })
    console.log('Guardado')
    this.router.navigateByUrl('/BlogTico');
  }

}
