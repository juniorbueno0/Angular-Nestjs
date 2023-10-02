import { Injectable, NotFoundException } from '@nestjs/common';
import { Message } from 'src/schemas/message.schema';

@Injectable()
export class PostService {
  // you can put all the project logic here!
  private posts: Array<Message> = [];
  
  public findAll(): Array<Message> {
    return this.posts;
  }

  public findOne(id: number): Message {
    const post: Message = this.posts.find(post => post.id === id);
  
    if (!post) {
      throw new NotFoundException('Post not found.');
    }
  
    return post;
  }

    
  public create(post: Message): Message {
    // if the title is already in use by another post
    // const titleExists: boolean = this.posts.some(
    //   (item) => item.title === post.title,
    // );
    // if (titleExists) {
    //   throw new UnprocessableEntityException('Post title already exists.');
    // }

    // find the next id for a new blog post
    const maxId: number = Math.max(...this.posts.map((post) => post.id), 0);
    const id: number = maxId + 1;

    const blogPost: Message = {
      ...post,
      id,
    };

    this.posts.push(blogPost);
    return blogPost;
  }

  
  public delete(id: number): void {
    const index: number = this.posts.findIndex(post => post.id === id);

    // -1 is returned when no findIndex() match is found
    if (index === -1) {
      throw new NotFoundException('Post not found.');      
    }

    this.posts.splice(index, 1);
  }

}
