import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = ['all', 'herramientas', 'materiales', 'seguridad', 'electrico', 'plomeria'];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products]; // Inicializar con todos los productos al principio
  }

  filterProducts(category: string) {
    if (category === 'all') {
      this.filteredProducts = [...this.products]; // Mostrar todos los productos
    } else {
      this.filteredProducts = this.products.filter(p => p.category === category);
    }
  }

  viewProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
