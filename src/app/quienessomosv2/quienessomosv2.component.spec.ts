import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quienessomosv2Component } from './quienessomosv2.component';

describe('Quienessomosv2Component', () => {
  let component: Quienessomosv2Component;
  let fixture: ComponentFixture<Quienessomosv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Quienessomosv2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Quienessomosv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
