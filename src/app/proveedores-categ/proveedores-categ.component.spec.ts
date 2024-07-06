import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresCategComponent } from './proveedores-categ.component';

describe('ProveedoresCategComponent', () => {
  let component: ProveedoresCategComponent;
  let fixture: ComponentFixture<ProveedoresCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProveedoresCategComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedoresCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
