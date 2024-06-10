import { formatCurrency, getLocaleCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  standalone: true,
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number, digitsInfo?: string): unknown {
    const localeCurrencySymbol = getLocaleCurrencySymbol('es-PE')!;
    const digits = digitsInfo ? digitsInfo : '.2-2';

    return formatCurrency(value, 'es-PE', localeCurrencySymbol, 'PEN', digits);
  }
}
