import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appOnlyText]',
  standalone: true,
})
export class OnlyTextDirective {
  element: ElementRef<HTMLInputElement> = inject(ElementRef);
  ngControl = inject(NgControl, { optional: true }); // se alinea con el ngModel del input

  constructor() {}
  @HostListener('input', ['$event']) onInput(event: Event) {
    // podemos usar esta linea o escuchar el value en el 2do parametro de HostListener
    // const value = this.element.nativeElement.value
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(value)) {
      this.setValue(value);
    }
  }

  private setValue(value: string) {
    const cleanValue = value.replace(/[^a-zA-Z\s]/g, '');
    if (this.ngControl) {
      this.ngControl?.control?.setValue(cleanValue);
    } else {
      this.element.nativeElement.value = cleanValue;
    }
  }
}
