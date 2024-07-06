// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule,ExtraOptions  } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'; // Asegúrate de que HomeComponent esté importado
import { ProductoComponent } from './producto/producto.component'; // Asegúrate de que ProductoComponent esté importado

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'product/:id', component: ProductoComponent }, // Ruta con parámetro :id
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