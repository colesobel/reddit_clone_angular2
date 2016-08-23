import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, [term]){
    return value.filter(elem => elem.title.toLowerCase().includes([term]))
  }

}
