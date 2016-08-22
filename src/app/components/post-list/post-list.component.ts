import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../classes/post'
import { PostItemComponent } from '../post-item'
import { PostComment } from '../../classes/post-comment'
import { PostDataService } from '../../services/post-data.service'
import { SearchPipe } from '../../pipes/search.pipe'


@Component({
  moduleId: module.id,
  selector: 'rc-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.css'],
  directives: [PostItemComponent],
  pipes: [SearchPipe]
})
export class PostListComponent implements OnInit {
  constructor(private postDataService: PostDataService) {}
  @Input() term
  posts: Post[] = this.postDataService.getPosts()

  ngOnInit() {
  }

}
