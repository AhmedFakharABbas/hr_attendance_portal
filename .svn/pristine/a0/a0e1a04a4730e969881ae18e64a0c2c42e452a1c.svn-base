import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(array: any, id: number, param: string): any[] {
    if (!array) {
      return array;
    }
    return array.filter((per) => per[param] == id);
  }

}
