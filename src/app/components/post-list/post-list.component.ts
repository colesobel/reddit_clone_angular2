import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../classes/post'
import { PostItemComponent } from '../post-item'
import { PostComment } from '../../classes/post-comment'
import { PostDataService } from '../../services/post-data.service'
import { SearchPipe } from '../../pipes/search.pipe'
import { SearchTermService } from '../../services/search-term.service'
import { OrderByPipe } from '../../pipes/order-by.pipe'
import { OrderByTermService } from '../../services/order-by-term.service'


@Component({
  moduleId: module.id,
  selector: 'rc-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.css'],
  directives: [PostItemComponent],
  pipes: [SearchPipe, OrderByPipe]
})
export class PostListComponent implements OnInit {
  constructor(private postDataService: PostDataService, private searchTermService: SearchTermService, private orderByTermService: OrderByTermService) {}
  term = ''
  orderByTerm = 'date'
  posts: Post[] = this.postDataService.getPosts()

  ngOnInit() {
    this.searchTermService.pushData.subscribe(data => this.term = data)
    this.orderByTermService.pushData.subscribe(data => this.orderByTerm = data)
  }

}
