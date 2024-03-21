import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarTabla'
})
export class FiltrarTablaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
