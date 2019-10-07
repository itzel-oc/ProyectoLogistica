import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lada'
})
export class LadaPipe implements PipeTransform {

  transform(value: string, country: string): any {
    let lada;
    switch (country) {
      case 'México':
        lada = '(+52)';
        break;
      case 'USA':
        lada = '(+1)';
        break;
      case 'Canada':
        lada = '(+1)';
        break;
      case 'Japón':
        lada = '(+81)';
        break;
      default:
        lada = '(+52)';
    }
    return lada+value;
  }

}
