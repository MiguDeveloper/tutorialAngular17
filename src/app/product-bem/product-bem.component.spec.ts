import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBemComponent } from './product-bem.component';

describe('ProductBemComponent', () => {
  let component: ProductBemComponent;
  let fixture: ComponentFixture<ProductBemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductBemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductBemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
