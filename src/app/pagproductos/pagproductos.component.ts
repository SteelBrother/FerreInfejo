import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Marca } from '../models/marca.model';
import { Category } from '../models/category.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pagproductos',
  templateUrl: './pagproductos.component.html',
  styleUrls: ['./pagproductos.component.scss', './paginador.scss']
})
export class PagproductosComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  marcas: Marca[] = [];
  filteredProducts: Product[] = [];
  pageSize = 12; // Número de productos por página
  currentPage = 1; // Página actual
  totalPages = 0; // Número total de páginas
  searchTerm: string = ''; // Término de búsqueda
  selectedCategory: string = ''; // Categoría seleccionada
  selectedMarca: string = ''; // Marca seleccionada
  nombre: string | null = null;
  marca: string | null = null;

  constructor(
    private renderer: Renderer2,
    private location: Location,
    @Inject(PLATFORM_ID) private platformId: Object,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   
    this.route.paramMap.subscribe(params => {
      this.nombre = params.get('nombre');
      this.marca = params.get('marca');
      
      // Realiza la lógica necesaria para manejar los productos filtrados
      if (this.nombre) {
        console.log(this.nombre);
        this.selectedCategory = this.nombre
        this.updateFilteredProducts();
      }
      if (this.marca) {
        console.log(this.marca);
        this.selectedMarca = this.marca
        this.updateFilteredProducts();
      }
    });

    this.products = this.productService.getProducts();
    this.categories = this.productService.getAllCategories();
    this.marcas = this.productService.getMarcas();
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
      (
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.ref.toLowerCase().includes(this.searchTerm.toLowerCase())
      ) &&
      (this.selectedCategory ? product.category === this.selectedCategory : true) &&
      (this.selectedMarca ? product.marca === this.selectedMarca : true) 
    );
    
    this.filteredProducts = filtered;
    
    this.totalPages = Math.ceil(filtered.length / this.pageSize);
    
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.filteredProducts = filtered.slice(startIndex, endIndex);
  }

  goBack() {
    this.location.back();
  }

  onSearch() {
    this.currentPage = 1;
    this.updateFilteredProducts();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateFilteredProducts();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateFilteredProducts();
    }
  }

  setPage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.updateFilteredProducts();
    }
  }

  viewProduct(productId: number, productName: string) {
    this.router.navigate(['/product', productName], { queryParams: { id: productId } });
  }
}
