import { Component } from '@angular/core';
import { HeaderComponent } from './components/header'
import { PostListComponent } from './components/post-list'
import { AddPostFormComponent } from './components/add-post-form'

@Component({
  moduleId: module.id,
  selector: 'rc-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, PostListComponent, AddPostFormComponent]
})
export class AppComponent {

}
