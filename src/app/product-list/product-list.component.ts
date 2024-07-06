import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category.model';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this.categories = this.productService.getAllCategories();
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
