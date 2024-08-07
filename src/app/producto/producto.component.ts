import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  product: Product | undefined;
  products: Product[] = [];
  productsFilter: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private productService: ProductService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    if (isPlatformBrowser(this.platformId)) {
      this.loadScript();
    }

    // Obtener el nombre del producto desde los parámetros de la URL
    const productName = this.route.snapshot.paramMap.get('nombre');

    // Obtener el ID del producto desde los parámetros de consulta (queryParams)
    this.route.queryParams.subscribe(params => {
      const productId = params['id'];

      if (productId === undefined || isNaN(productId)) {
        // Manejar el caso donde el ID no es válido
        this.router.navigateByUrl('/'); // Redirigir a la página principal u otra página de manejo de errores
        return;
      }

      // Obtener el producto por ID
      this.product = this.productService.getProductById(+productId);
      if (!this.product) {
        this.router.navigate(['/']);
      } else {
        this.productsFilter = this.productService.getProductsByCategory(this.product.category);
      }
    });
  }

  goBack() {
    this.location.back();
  }
  viewProduct(productId: number, productName: string) {
    this.router.navigate(['/product', productName], { queryParams: { id: productId } });
  }
  loadScript() {
    const script = this.renderer.createElement('script');
    script.src = 'assets/js/scriptproducto2.js';
    script.onload = () => {
      console.log('Script loaded successfully');
    };
    this.renderer.appendChild(document.body, script);
  }

  sendWhatsAppMessage(productId: number) {
    const product = this.products.find((p: Product) => p.id === productId);
    if (product) {
        const productName = product.name;
        const productUrl = `${window.location.origin}/product/${encodeURIComponent(productName)}?id=${productId}`;
        const message = `Hola quiero más información sobre ${productName},${product.fichatec}. Visita este enlace para más detalles: ${productUrl}`;
        const phoneNumber = '3126063288';
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    } else {
        console.error('Producto no encontrado');
    }
}



}
