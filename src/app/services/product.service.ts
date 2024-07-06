// product.service.ts

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../data/product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = PRODUCTS;
  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  getCategories(): string[] {
    return [...new Set(this.products.map(product => product.category))];
  }
  getProductosDescuento(): Product[] {
    return this.products.filter(product => product.descuento === true);
  }
  getProductosDestacados(): Product[] {
    return this.products.filter(product => product.destacado === true);
  }
}
