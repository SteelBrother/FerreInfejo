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
    
    // this.filteredProducts = [...this.products]; 
    this.filteredProducts = this.getRandomProducts();
  }

  getRandomProducts(): any[] {

    function shuffle(array: any[]): void {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    const shuffledProducts = [...this.products]; 
    shuffle(shuffledProducts); 
    return shuffledProducts.slice(0, 12);
  }

  loadMoreProducts() {
    this.router.navigate(['/listadoproductos']);
  }

  filterProducts(category: string) {
    if (category === 'all') {
      this.filteredProducts = this.getRandomProducts(); // Mostrar todos los productos
    } else {
      this.filteredProducts = this.products
      .filter(p => p.category === category)
      .sort(() => 0.5 - Math.random())
      .slice(0, 12);

    }
  }

  // viewProduct(productId: number) {
  //   this.router.navigate(['/product', productId]);
  // }
  viewProduct(productId: number, productName: string) {
    console.log(productId, productName);
    this.router.navigate(['/product', productName], { queryParams: { id: productId } });
  }
  
  
}
