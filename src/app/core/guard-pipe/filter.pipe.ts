import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string): any {
    if (value.length === 0) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {

      if (item.Location.slice(0,filterString.length) == filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
