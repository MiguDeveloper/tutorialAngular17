import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductBemModule } from './product-bem/product-bem.module';
import { ProductModule } from './product/product.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductBemModule, ProductModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tutorialAngular17';
}
