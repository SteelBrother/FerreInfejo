import { Component , OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores-categ',
  templateUrl: './proveedores-categ.component.html',
  styleUrl: './proveedores-categ.component.css',
})
export class ProveedoresCategComponent implements OnInit {
  categories: Category[] = [];
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories = this.productService.getFourCategories();
    if (isPlatformBrowser(this.platformId)) {
      //  this.loadScript();
    }
  }

  loadScript() {
    const script = this.renderer.createElement('script');
    script.src = 'assets/js/scriptproducto.js';
    script.onload = () => {
      console.log('Script loaded successfully');
    }; 
    this.renderer.appendChild(document.body, script);
  }

  navigateToCategoria(nombre: string) {
    // this.router.navigate(['/listadoproductos'], { queryParams: { categoria: nombre } });
    this.router.navigate(['/listadoproductos/category', nombre]);
  }
}
