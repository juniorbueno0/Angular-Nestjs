import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styles: [
  ]
})
export class ListPostComponent implements OnInit {
  postList: Post[] = [];

  constructor(private postService:PostService){}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(posts => {
      this.postList = posts;
    })
  }
}
