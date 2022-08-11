import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProvider, routing } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { MenuVisitanteComponent } from './menu-visitante/menu-visitante.component';
import { MenuDuenioComponent } from './menu-duenio/menu-duenio.component';
import { ForoVisitanteComponent } from './foro-visitante/foro-visitante.component';
import { ConfigVisitanteComponent } from './config-visitante/config-visitante.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    MenuVisitanteComponent,
    MenuDuenioComponent,
    ForoVisitanteComponent,
    ConfigVisitanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
