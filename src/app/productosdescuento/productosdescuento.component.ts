import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-productosdescuento',
  templateUrl: './productosdescuento.component.html',
  styleUrl: './productosdescuento.component.css'
})
export class ProductosdescuentoComponent implements OnInit {

  products: Product[] = [];
  productsDestacados: Product[] = [];
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.productService.getProductosDescuento();
    this.productsDestacados = this.productService.getProductosDestacados();
  }

  viewProduct(productId: number, productName: string) {
    this.router.navigate(['/product', productName], { queryParams: { id: productId } });
  }
}
