import { Component } from '@angular/core';
import { HeaderComponent } from './components/header'
import { PostListComponent } from './components/post-list'
import { AddPostFormComponent } from './components/add-post-form'
import { SearchTermService } from './services/search-term.service'
import { PostDataService } from './services/post-data.service'
import { OrderByTermService } from './services/order-by-term.service'

@Component({
  moduleId: module.id,
  selector: 'rc-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, PostListComponent, AddPostFormComponent],
  providers: [SearchTermService, PostDataService, OrderByTermService]
})
export class AppComponent {

}
