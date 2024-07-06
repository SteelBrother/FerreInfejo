import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosdescuentoComponent } from './productosdescuento.component';

describe('ProductosdescuentoComponent', () => {
  let component: ProductosdescuentoComponent;
  let fixture: ComponentFixture<ProductosdescuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosdescuentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosdescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
