// product.service.ts

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../data/product-data';
import { Category } from '../models/category.model';
import { CATEGORIES } from '../data/category-data';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = PRODUCTS;
  private categories : Category[] = CATEGORIES;
  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  getCategoryId(id: number): Category | undefined {
    return this.categories.find(cat => cat.id === id);
  }
  getCategoryNombre(nombre: string): Category | undefined {
    return this.categories.find(cat => cat.nombre === nombre);
  }
  getAllCategories(): Category[] {
    return this.categories;
  }
  getProductosDescuento(): Product[] {
    return this.products.filter(product => product.descuento === true);
  }
  getProductosDestacados(): Product[] {
    return this.products.filter(product => product.destacado === true);
  }
  getProductsByCategory(category: string, limit: number = 4): Product[] {
    return this.products.filter(product => product.category === category).slice(0, limit);
  }
}
