// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule,ExtraOptions  } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'; // Asegúrate de que HomeComponent esté importado
import { ProductoComponent } from './producto/producto.component'; // Asegúrate de que ProductoComponent esté importado
import { PagProductosComponent } from './pag-productos/pag-productos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'product/:id', component: ProductoComponent }, // Ruta con parámetro :id
  { path: 'listadoproductos/:nombre', component: PagProductosComponent }, // Ruta con parámetro :nombre
  { path: 'listadoproductos', component: PagProductosComponent }, 
  { path: '**', redirectTo: '' } // Manejo de rutas no encontradas
];


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top', // Desplazamiento hacia la parte superior en la navegación
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }