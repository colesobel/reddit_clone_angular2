import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchTermService } from '../../services/search-term.service'
import { OrderByTermService } from '../../services/order-by-term.service'

@Component({
  moduleId: module.id,
  selector: 'rc-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  constructor(private searchTermService: SearchTermService, private orderByTermService: OrderByTermService) {}
  orderByTerm = ''

  onChange(term) {
    this.searchTermService.updateSearchTerm(term)
    this.searchTermService.exportTerm(term)
  }

  onOrderChange(newTerm) {
    this.orderByTermService.changeTerm(newTerm)
    this.orderByTermService.exportTerm(newTerm)
  }

  @Output() update = new EventEmitter()
  ngOnInit() {
    this.update.emit('')
  }

}
