import { PostComment } from './post-comment'

export class Post {
    constructor(public title: string, public author: string, public description: string, public image: string, public date: number, public comments: PostComment[], public showComments: Boolean, public votes: number) {
        
    }
}
