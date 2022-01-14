import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    const resultArray = [];

    if (value.length === 0 || filterString === '') {
      return value;
    }

    for (const item of value) {
      if (item.status.includes(filterString)) {
        resultArray.push(item);
      }
    }
    return resultArray;

  }

}
