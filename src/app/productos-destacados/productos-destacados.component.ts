import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-productos-destacados',
  templateUrl: './productos-destacados.component.html',
  styleUrl: './productos-destacados.component.css'
})
export class ProductosDestacadosComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.productService.getProductosDestacados();
  }

  viewProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
