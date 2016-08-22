import { Component, OnInit, Input } from '@angular/core';
import { PostComment } from '../../classes/post-comment'
import { CommentItemComponent } from '../comment-item'

@Component({
  moduleId: module.id,
  selector: 'rc-comments-list',
  templateUrl: 'comments-list.component.html',
  styleUrls: ['comments-list.component.css'],
  directives: [CommentItemComponent]
})
export class CommentsListComponent implements OnInit {
  @Input() comments: PostComment[]
  
  constructor() { }

  ngOnInit() {
    console.log('hello');
    
  }

}
