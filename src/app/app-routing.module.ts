// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule,ExtraOptions  } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'; // Asegúrate de que HomeComponent esté importado
import { ProductoComponent } from './producto/producto.component'; // Asegúrate de que ProductoComponent esté importado
import { PagproductosComponent } from './pagproductos/pagproductos.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { Quienessomosv2Component } from './quienessomosv2/quienessomosv2.component';
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'product/:nombre', component: ProductoComponent },
  { path: 'listadoproductos/:nombre', component: PagproductosComponent },
  { path: 'listadoproductos', component: PagproductosComponent },
  { path: 'quienessomos', component: Quienessomosv2Component },
  { path: '**', redirectTo: '' }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top', // Desplazamiento hacia la parte superior en la navegación
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }