import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({providedIn: 'root'})
export class PostService {
    apiUrl: string = 'http://localhost:3000/posts'

    constructor(private http:HttpClient) { }
    
    getAllPosts(): Observable<any> {
        return this.http.get(this.apiUrl);
    }

    createPosts(newpost: Post):Observable<any>{
        console.log(this.apiUrl, newpost);
        return this.http.post(this.apiUrl, newpost);
    }

}