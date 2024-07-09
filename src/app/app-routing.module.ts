// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule,ExtraOptions  } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'; // Asegúrate de que HomeComponent esté importado
import { ProductoComponent } from './producto/producto.component'; // Asegúrate de que ProductoComponent esté importado
import { PagproductosComponent } from './pagproductos/pagproductos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'product/:nombre', component: ProductoComponent },
  { path: 'listadoproductos/:nombre', component: PagproductosComponent },
  { path: 'listadoproductos', component: PagproductosComponent },
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