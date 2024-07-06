import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactImgComponent } from './contact-img.component';

describe('ContactImgComponent', () => {
  let component: ContactImgComponent;
  let fixture: ComponentFixture<ContactImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
