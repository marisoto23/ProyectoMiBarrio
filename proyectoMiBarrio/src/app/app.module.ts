import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProvider, routing } from './app.routing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { MenuVisitanteComponent } from './menu-visitante/menu-visitante.component';
import { MenuDuenioComponent } from './menu-duenio/menu-duenio.component';
import { ForoVisitanteComponent } from './foro-visitante/foro-visitante.component';
import { ConfigVisitanteComponent } from './config-visitante/config-visitante.component';
import { BlogTicoComponent } from './blog-tico/blog-tico.component';
import { ForoBlogTicoComponent } from './foro-blog-tico/foro-blog-tico.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { RegistroForoComponent } from './registro-foro/registro-foro.component';
import { ForoComponent } from './foro/foro.component';
import { ConfigForoComponent } from './config-foro/config-foro.component';
import { ConfigBlogTicoComponent } from './config-blog-tico/config-blog-tico.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    MenuVisitanteComponent,
    MenuDuenioComponent,
    ForoVisitanteComponent,
    ConfigVisitanteComponent,
    BlogTicoComponent,
    ForoBlogTicoComponent,
    ContactenosComponent,
    RegistroForoComponent,
    ForoComponent,
    ConfigForoComponent,
    ConfigBlogTicoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
