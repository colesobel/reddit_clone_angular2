import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class OrderByTermService {

  constructor() { }

  orderByTerm: string = 'Date'

  changeTerm(newTerm: string) {
    this.orderByTerm = newTerm
  }

  pushData = new EventEmitter<string>()

  exportTerm(value:string) {
    this.pushData.emit(value)
  }

}
