import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    console.log('Iniciolis');
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this.categories = this.productService.getCategories();
  }

  filterProducts(category: string) {
    this.filteredProducts = category ? this.products.filter(p => p.category === category) : this.products;
  }

  viewProduct(productId: number) {
    this.router.navigate(['/producto', productId]);
  }

  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.filterProducts(target.value);
    }
  }
}
