import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleProductDetailPageComponent } from './simple-product-detail-page.component';

describe('SimpleProductDetailPageComponent', () => {
  let component: SimpleProductDetailPageComponent;
  let fixture: ComponentFixture<SimpleProductDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleProductDetailPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleProductDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
