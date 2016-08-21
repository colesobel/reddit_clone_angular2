import { Component, OnInit, Input } from '@angular/core';
import { PostComment } from '../../classes/post-comment'

@Component({
  moduleId: module.id,
  selector: 'rc-comment-item',
  templateUrl: 'comment-item.component.html',
  styleUrls: ['comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
  @Input() comment: PostComment
  constructor() { }

  ngOnInit() {
  }

}
