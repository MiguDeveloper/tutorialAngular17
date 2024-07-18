import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { debounceTime } from 'rxjs';

interface ICartProduct {
  name: string;
  price: number;
  quantity: number;
  total: number;
}

const PRODUCTS: ICartProduct[] = [
  { name: 'Mens Casual Slim Fit', price: 109.95, quantity: 2, total: 219.9 },
  {
    name: "ohn Hardy Women's Legends Naga Gold & Silver Dragon",
    price: 695,
    quantity: 1,
    total: 695,
  },
  {
    name: 'ierced Owl Rose Gold Plated Stainless Steel Double',
    price: 10.99,
    quantity: 1,
    total: 10.99,
  },
];

@Component({
  selector: 'app-simple-product-detail-page',
  standalone: true,
  imports: [
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './simple-product-detail-page.component.html',
  styleUrl: './simple-product-detail-page.component.scss',
})
export class SimpleProductDetailPageComponent implements OnInit {
  private readonly _cartProduct: ICartProduct = PRODUCTS[0];
  private readonly _fb = inject(FormBuilder);
  displayedColumns: string[] = [...Object.keys(this._cartProduct), 'actions'];

  formGroup = this._fb.group({
    total: PRODUCTS.reduce((acc, product) => acc + product.total, 0),
    products: this._fb.array(
      PRODUCTS.map((product) => this._createFormGroup(product)),
    ),
  });
  // dataSource = PRODUCTS;
  dataSource = new MatTableDataSource(
    this.formGroup.controls.products.controls,
  );

  ngOnInit(): void {
    this._calculate_row_total();
  }
  private _createFormGroup(product: ICartProduct) {
    return this._fb.group({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      total: product.total,
    });
  }

  private _calculate_row_total() {
    this.productsFormArray.controls.forEach(
      ({ controls: { quantity, price, total } }) => {
        quantity.valueChanges.pipe(debounceTime(200)).subscribe((value) => {
          console.log('---- Gaaaaa ----');
          const priceValue = price.value!;
          let totalValue = 0;
          if (value) {
            totalValue = priceValue * value;
          }
          total.setValue(totalValue);
        });
      },
    );
  }
  get productsFormArray() {
    return this.formGroup.controls.products;
  }

  clickDelete(index: number) {
    this.productsFormArray.removeAt(index);
    this.dataSource.data = this.productsFormArray.controls;
    // esto es una funcion privada por ello no se recomienda usarla por un tema de buenas practicas
    // ya que en una posible actualizacion se podria quitar
    //this.dataSource._updateChangeSubscription();
  }
}
