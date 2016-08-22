import { Component, OnInit } from '@angular/core';
import { Post } from '../../classes/post'
import { PostDataService } from '../../services/post-data.service'

@Component({
  moduleId: module.id,
  selector: 'rc-add-post-form',
  templateUrl: 'add-post-form.component.html',
  styleUrls: ['add-post-form.component.css']
})
export class AddPostFormComponent implements OnInit {

  constructor(private postDataService: PostDataService) { }
  title = ''
  author = ''
  description = ''
  image = ''

  addPost() {
    this.postDataService.addPost(new Post(this.title, this.author, this.description, this.image, new Date().getTime(), [], false, 0)) 
  }


  ngOnInit() {
  }

}
