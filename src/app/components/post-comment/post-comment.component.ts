import { Component, OnInit, Input } from '@angular/core';
import { PostDataService } from '../../services/post-data.service'
import { PostComment } from '../../classes/post-comment'

@Component({
  moduleId: module.id,
  selector: 'rc-post-comment',
  templateUrl: 'post-comment.component.html',
  styleUrls: ['post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  constructor(private addAComment: PostDataService) {}

  comment = ''
  author = ''

  @Input() title;

  addCommentToPost(title) {
    this.addAComment.addComment(title, new PostComment(this.author, this.comment))
    this.comment = ''
    this.author = ''

  }
  ngOnInit() {
  }

}
