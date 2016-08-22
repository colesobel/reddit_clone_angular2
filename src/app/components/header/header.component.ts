import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'rc-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  constructor() {}
  @Output() update = new EventEmitter()


  ngOnInit() {
    this.update.emit('')
  }

}
