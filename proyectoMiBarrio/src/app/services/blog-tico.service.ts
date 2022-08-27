import { Injectable } from "@angular/core";
import { BlogTico } from "../models/blog-tico";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from "./global";
import { Observable } from "rxjs";

@Injectable()
export class BlogTicoService{
  public listaBlogTico: Array<BlogTico> = Array<BlogTico>();
  public blogTico: BlogTico = new BlogTico("","","", "", "");

  public url:string;

  constructor(private http: HttpClient){
    this.url = 'http://localhost:3700/BlogTico/'
    this.listaBlogTico = []
  }

  getBlogTicos():Observable<any>{
    let headers =  new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.url+'BlogTicos', {headers:headers});
  }

  postBlogTico(url:string, nuevo: {}){
    this.http.post<BlogTico>(url, nuevo).subscribe(data => {
      this.listaBlogTico = [this.blogTico];
    })
  }
  getBlogTico():Observable<any>{
    let headers =  new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.url+'BlogTico', {headers:headers});
  }

  updateBlogTico(url:string, nuevo: {}){
    this.http.put<BlogTico>(url, nuevo).subscribe(data => {
      this.listaBlogTico = [this.blogTico];
    })
  }

  deleteBlogTico():Observable<any>{
    let headers =  new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.delete(this.url+'BlogTico/', {headers:headers});
  }
}
