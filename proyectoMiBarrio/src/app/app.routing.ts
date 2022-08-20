//1. Importar los modulos del Routing
import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

//2. Importar todos nuestros componentes
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { MenuVisitanteComponent } from "./menu-visitante/menu-visitante.component";
import { ConfigVisitanteComponent } from "./config-visitante/config-visitante.component";

//3. Array de Rutas
const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Login',component:LoginComponent},
  {path:'Signup',component:SignupComponent},
  {path:'MenuVisitante', component:MenuVisitanteComponent},
  {path:'ConfigVisitante', component:ConfigVisitanteComponent},
  {path:'*',component:ErrorComponent}
]
//4. Exportar el modulo
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)
