import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<any>, ...args: any[]): any {
    const [filterString, key] = args;
    if (!filterString) return items
    const filteredOrders = items.filter(item => item[key].toString().includes(filterString))
    return filteredOrders;
  }

}
