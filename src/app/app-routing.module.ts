import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoComponent } from './producto/producto.component';
import { PagproductosComponent } from './pagproductos/pagproductos.component';
import { Quienessomosv2Component } from './quienessomosv2/quienessomosv2.component';
import { PoliticasprivacidadComponent } from './politicasprivacidad/politicasprivacidad.component';
import { PoliticasdevolucionComponent } from './politicasdevolucion/politicasdevolucion.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'product/:nombre', component: ProductoComponent },
  { path: 'listadoproductos/category/:nombre', component: PagproductosComponent },
  { path: 'listadoproductos/marca/:marca', component: PagproductosComponent },
  { path: 'listadoproductos', component: PagproductosComponent },
  { path: 'politicasprivacidad', component: PoliticasprivacidadComponent },
  { path: 'politicasdevolucion', component: PoliticasdevolucionComponent },
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
