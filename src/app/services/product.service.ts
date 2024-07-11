// product.service.ts

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../data/product-data';
import { Category } from '../models/category.model';
import { CATEGORIES } from '../data/category-data';
import { MARCAS } from '../data/marcas-data';
import { Marca } from '../models/marca.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = PRODUCTS;
  private categories : Category[] = CATEGORIES;
  private Marcas : Marca[] = MARCAS;
  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
  getMarcas(): Marca[] {
    return this.Marcas;
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
  getFourCategories(): Category[] {
    return this.categories.slice(0, 4);
  }
  getProductosDescuento(): Product[] {
    return this.products.filter(product => product.descuento === true);
  }
  getProductosDestacados(): Product[] {
    return this.products.filter(product => product.destacado === true);
  }
  getProductsByCategory(category: string, limit: number = 4): Product[] {
    const filteredProducts = this.products.filter(product => product.category === category);
    return this.shuffleArray(filteredProducts).slice(0, limit);
  }

  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
