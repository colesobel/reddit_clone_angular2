import { Component, OnInit } from '@angular/core';
import { Post } from '../../classes/post'
import { PostItemComponent } from '../post-item'
import { PostComment } from '../../classes/post-comment'
import { PostDataService } from '../../services/post-data.service'

@Component({
  moduleId: module.id,
  selector: 'rc-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.css'],
  directives: [PostItemComponent]
})
export class PostListComponent implements OnInit {
  constructor(private postDataService: PostDataService) {}

  posts: Post[] = this.postDataService.getPosts()

  ngOnInit() {
  }

}
