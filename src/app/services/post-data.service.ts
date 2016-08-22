import { Post } from '../classes/post'
import { PostComment } from '../classes/post-comment'

export class PostDataService {
  private posts: Post[] = [
    new Post ('Galvanize', 'Cole Sobel', 'Where I go to school', 'http://www.rrengineers.com/wp-content/uploads/Galvanize-2-street-view-450x300.jpg', new Date().getTime() - 100000000000, [ 
    new PostComment('Lucifer', 'Hey, look, a coding school!'), 
    new PostComment('THE_baby_ninja', 'Hey, maybe I should become a coder!')
    ], false, 0),
    new Post ('Denver', 'Lucifer', 'Hey, look at my mad photo skills, yo!', 'http://denveryoungprofessionals.com/wp-content/uploads/2015/01/denver-skyline.jpg', new Date().getTime(), [ 
    new PostComment('Cole Sobel', 'Hey, I live there!'),
    new PostComment('A Different Ninja', 'Hey, I visited there once!')
    ], false, -5),
    new Post ('A Baby Ninja', 'A Different Ninja', 'Such a cool baby ninja!', 'http://xcp.ninja/images/ninja-icon.png', new Date().getTime() - 10000000, [ 
    new PostComment('THE_baby_ninja', 'Hey, look, that\'s me!'),
    new PostComment('Lucifer', 'Hey, you\'re supposed to be in hell!'),
    new PostComment('Cole Sobel', 'Hey, where is he??!!')
    ], false, 10)
  ]

  addPost(input: Post) {
    this.posts.push(input)
  }

  getPosts() {
    return this.posts
  }

}
