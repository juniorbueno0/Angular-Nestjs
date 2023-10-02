import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { PostService } from '../services/post.service';
import { Post } from '../interfaces/post.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {
  FormData:FormGroup;
  postList: Post[] = [];

  constructor(private formBuilder:FormBuilder, private postService:PostService){
    this.FormData = this.formBuilder.group({
      content:[ '', Validators.required ]
    });

  }

  ngOnInit(): void {
    this.displayPosts()
  }

  onSubmitForm(){
    if(this.FormData.value.content !== ''){
      console.log(this.FormData.value.content);


      let newPost = {
        id: 0,
        content:this.FormData.value.content 
      };

      // console.log(newPost);
      // this.postService.createPosts(newPost);
      
      this.postService.createPosts(newPost).subscribe((response) => {
        // The new post has been created successfully.
      });
    }

  }

  displayPosts() {
    this.postService.getAllPosts().subscribe(data => {
      this.postList = data;
    })
  }
}
