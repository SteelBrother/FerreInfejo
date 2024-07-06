import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavresponsiveComponent } from './navresponsive.component';

describe('NavresponsiveComponent', () => {
  let component: NavresponsiveComponent;
  let fixture: ComponentFixture<NavresponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavresponsiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavresponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
