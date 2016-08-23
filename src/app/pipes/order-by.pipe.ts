import { Pipe } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe {

  transform(array: Array<string>, arg: string): Array<string> {
    let op: number = arg === 'title' ? -1 : 1
    array.sort((a: any, b: any) => {
      if (a[arg] < b[arg]) {
        return 1 * op;
      } else if (a[arg] > b[arg]) {
        return 1 * -op;
      } else {
        return 0;
      }
    });
    return array;
  }

}
