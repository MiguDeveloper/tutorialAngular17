import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullProductDetailPageComponent } from './full-product-detail-page.component';

describe('FullProductDetailPageComponent', () => {
  let component: FullProductDetailPageComponent;
  let fixture: ComponentFixture<FullProductDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullProductDetailPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FullProductDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
