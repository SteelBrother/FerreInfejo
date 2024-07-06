import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pag-productos',
  templateUrl: './pag-productos.component.html',
  styleUrls: ['./pag-productos.component.scss']
})
export class PagProductosComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  pageSize = 12; // Número de productos por página
  currentPage = 1; // Página actual
  totalPages = 0; // Número total de páginas
  searchTerm: string = ''; // Término de búsqueda
  selectedCategory: string = ''; // Categoría seleccionada

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.totalPages = Math.ceil(this.products.length / this.pageSize);
    this.updateFilteredProducts();
    if (isPlatformBrowser(this.platformId)) {
      this.loadScript();
    }
  }

  loadScript() {
    const script = this.renderer.createElement('script');
    script.src = 'assets/js/scriptpagproductos.js';
    script.onload = () => {
      console.log('Script loaded successfully');
    };
    this.renderer.appendChild(document.body, script);
  }

  updateFilteredProducts() {
    const filtered = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedCategory ? product.category === this.selectedCategory : true)
    );
    this.totalPages = Math.ceil(filtered.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.filteredProducts = filtered.slice(startIndex, endIndex);
  }

  onSearch() {
    this.currentPage = 1;
    this.updateFilteredProducts();
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.updateFilteredProducts();
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateFilteredProducts();
    }
  }

  resetFilters() {
    this.searchTerm = ''; 
    this.selectedCategory = ''; 
    this.updateFilteredProducts();
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateFilteredProducts();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateFilteredProducts();
    }
  }

  viewProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
