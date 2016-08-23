import { Component, Input } from '@angular/core';
import { Post } from '../../classes/post'
import { PostCommentComponent } from '../post-comment'
import { CommentsListComponent } from '../comments-list'


@Component({
  moduleId: module.id,
  selector: 'rc-post-item',
  templateUrl: 'post-item.component.html',
  styleUrls: ['post-item.component.css', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'],
  directives: [PostCommentComponent, CommentsListComponent]
})
export class PostItemComponent {


  @Input() postDetail: Post

}
