import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {

  
    if (isPlatformBrowser(this.platformId)) {
        this.loadScript();
    }
    
    // Obtener el id del producto desde los parámetros de la URL
    const productIdParam = this.route.snapshot.paramMap.get('id');
    
    if (productIdParam === null || isNaN(+productIdParam)) {
      // Manejar el caso donde el id no es válido (puedes redirigir o mostrar un mensaje de error)
      this.router.navigateByUrl('/'); // Redirigir a la página principal u otra página de manejo de errores
      return;
    }

    const productId = +productIdParam;
    this.product = this.productService.getProductById(productId);

    if (!this.product) {
      // Manejar el caso donde el producto no existe (puedes redirigir o mostrar un mensaje de error)
      this.router.navigate(['/']); // Redirigir a la página principal u otra página de manejo de errores
    }
  }

  loadScript() {
    const script = this.renderer.createElement('script');
    script.src = 'assets/js/scriptproducto2.js';
    script.onload = () => {
      console.log('Script loaded successfully');
    };
    this.renderer.appendChild(document.body, script);
  }
}
