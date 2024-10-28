import { Injectable } from "@angular/core";
import { PostService } from "./post.service";
import { Post } from "./post.model";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { tap } from "rxjs";


/**
 * Database path
 * https://live-posts-8b51a-default-rtdb.firebaseio.com/
 * 
 */



@Injectable({providedIn: "root"})
export class BackEndService{

    constructor(private postService: PostService, private http:HttpClient){}
    //Save
    saveData(){
      // Step1 : get list of posts from post.service
      const listOfPosts: Post[] = this.postService.getPosts();


      //Step 2: send list posts to backend
        this.http.put('https://live-posts-8b51a-default-rtdb.firebaseio.com/posts.json', listOfPosts)
        .subscribe((res) => {console.log(res)});

    }


    //Fetch

    fetchData(){
        //Step1: Get the data from the database
        this.http
        .get<Post[]>(
            'https://live-posts-8b51a-default-rtdb.firebaseio.com/posts.json'
        )
        .pipe
            (tap((listOfPosts: Post[]) => {
                console.log(listOfPosts);

         //Step 2: Forward the data to post.service
         this.postService.setPosts(listOfPosts);
            
            })
        ).subscribe();

       
    }

}