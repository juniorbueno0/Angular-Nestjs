import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styles: [
  ]
})
export class CreatePostComponent {
  formData: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService:PostService){
    this.formData = this.formBuilder.group({
      content: ['', Validators.required]
    });
  }

  onSubmitData(){
    if(this.formData.value.content !== ''){

      let newPost = {
        id: 0,
        content:this.formData.value.content 
      };
      
      this.postService.createPosts(newPost).subscribe((response) => {
        console.log('//the new post has been created sucessfully!');
      });

      this.formData.reset();
    }
  }


}
