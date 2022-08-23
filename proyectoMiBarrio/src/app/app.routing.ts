//1. Importar los modulos del Routing
import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

//2. Importar todos nuestros componentes
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { MenuVisitanteComponent } from "./menu-visitante/menu-visitante.component";
import { ConfigVisitanteComponent } from "./config-visitante/config-visitante.component";
import { BlogTicoComponent } from "./blog-tico/blog-tico.component";
import { ForoBlogTicoComponent } from "./foro-blog-tico/foro-blog-tico.component";
import { ContactenosComponent } from "./contactenos/contactenos.component";

//3. Array de Rutas
const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Login',component:LoginComponent},
  {path:'Signup',component:SignupComponent},
  {path:'MenuVisitante', component:MenuVisitanteComponent},
  {path:'ConfigVisitante', component:ConfigVisitanteComponent},
  {path:'BlogTico', component:BlogTicoComponent},
  {path:'ForoBlogTico', component:ForoBlogTicoComponent},
  {path:'Contactenos', component:ContactenosComponent},
  {path:'*',component:ErrorComponent}
]

//4. Exportar el modulo
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)
