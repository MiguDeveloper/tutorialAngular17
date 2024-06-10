import { Directive, ElementRef, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appDemo]',
  standalone: true,
})
export class DemoDirective {
  private element: ElementRef<HTMLInputElement> = inject(ElementRef);
  renderer = inject(Renderer2);
  constructor() {
    console.log('DemoDirective created');
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
