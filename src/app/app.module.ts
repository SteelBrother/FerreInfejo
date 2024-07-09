import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { ProductoComponent } from './producto/producto.component';
import { NavComponent } from './nav/nav.component';
import { OtrosProductosComponent } from './otros-productos/otros-productos.component';
import { ProductosDestacadosComponent } from './productos-destacados/productos-destacados.component';
import { ProveedoresCategComponent } from './proveedores-categ/proveedores-categ.component';
import { BtnwaComponent } from './btnwa/btnwa.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './services/product.service';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosdescuentoComponent } from './productosdescuento/productosdescuento.component';
import { HeaderComponent } from './header/header.component';
import { ContactImgComponent } from './contact-img/contact-img.component';
import { FormasPagoComponent } from './formas-pago/formas-pago.component';
import { FormsModule } from '@angular/forms';
import { NavresponsiveComponent } from './navresponsive/navresponsive.component';
import { PagproductosComponent } from './pagproductos/pagproductos.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
@NgModule({
  declarations: [
    AppComponent,    
    ListaProductosComponent, MenuHeaderComponent, ProductoComponent, NavComponent, OtrosProductosComponent, ProductosDestacadosComponent, ProveedoresCategComponent, BtnwaComponent, FooterComponent, ContactoComponent, ProductListComponent, ProductDetailComponent, InicioComponent, ProductosdescuentoComponent, HeaderComponent, ContactImgComponent, FormasPagoComponent, NavresponsiveComponent, PagproductosComponent, QuienessomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
