import { Component, OnInit } from '@angular/core';
import { LogToConsoleService } from '../../services/log-to-console.service'

@Component({
  moduleId: module.id,
  selector: 'rc-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  providers: [LogToConsoleService]
})
export class HeaderComponent {
  constructor(private logging: LogToConsoleService) {}

  logTheShit(mess) {
    this.logging.logShitOut(mess)
  }

}
