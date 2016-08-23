import { EventEmitter } from '@angular/core'

export class SearchTermService {
  constructor() { }

  searchTerm: string = ''

  updateSearchTerm(newTerm: string) {
    this.searchTerm = newTerm
  }

  pushData = new EventEmitter<string>()

  exportTerm(value: string) {
    this.pushData.emit(value)
  }

}
