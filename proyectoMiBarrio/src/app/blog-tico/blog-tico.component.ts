import { Component, OnInit } from '@angular/core';
import { BlogTico } from '../models/blog-tico';
import { BlogTicoService } from '../services/blog-tico.service';
import { UsuarioService } from '../services/usuario.service';
import { Global } from '../services/global';

@Component({
  selector: 'app-blog-tico',
  templateUrl: './blog-tico.component.html',
  styleUrls: ['./blog-tico.component.css'],
  providers: [BlogTicoService, UsuarioService]
})
export class BlogTicoComponent implements OnInit {
  public url:string;
  public blogTicos: BlogTico[];
  public blogTico: BlogTico;
  constructor(private _blogTicoService:BlogTicoService) {
    this.url = Global.url;
    this.blogTicos = [];
    this.blogTico = new BlogTico("","","", "", "6305480d7a4ad48d6bfeb062");

  }

  ngOnInit(): void {
    this.getBlogTicos();
  }

  getBlogTicos(){
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

}
