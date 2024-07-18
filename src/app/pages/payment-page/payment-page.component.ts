import { Component, Input, OnInit, inject } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { IApiResponseProduct } from '../../services/models/product-api.interface';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatButton, MatIconButton, MatIcon],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.scss',
})
export class PaymentPageComponent implements OnInit {
  @Input() id?: string;
  @Input() title?: string;
  @Input() products?: IApiResponseProduct[] = [];

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);

  ngOnInit(): void {
    console.log(
      'Datos enviados por Params:',
      this._activatedRoute.snapshot.params,
    );
    console.log(
      'Datos enviados por Data property:',
      this._activatedRoute.snapshot.data,
    );
    console.log('@Input() params => ', this.id);
    console.log('@Input() title valor por ruta => ', this.title);
    console.log('@Input() products valor por ruta => ', this.products);
  }

  clickViewFullDetail(): void {
    this._router.navigate(['./', 'full-product-details'], {
      relativeTo: this._activatedRoute,
      queryParamsHandling: 'preserve',
    });
  }
}
