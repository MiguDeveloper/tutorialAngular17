import { Component, inject } from '@angular/core';
import { DemoService } from '../../../services/demo.service';

@Component({
  selector: 'app-full-product-detail-page',
  standalone: true,
  templateUrl: './full-product-detail-page.component.html',
  styleUrl: './full-product-detail-page.component.scss',
  providers: [DemoService],
})
export default class FullProductDetailPageComponent {
  private readonly _demoService = inject(DemoService);
}
