import { EventEmitter, Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn: "root"})
export class PostService{
    listChangedEvent: EventEmitter<Post[]> = new EventEmitter ();
    listOfPosts: Post [] = [
        new Post(
          "Nature 1",
          "This is a beautiful nature",
          "https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_c_fill_q_auto:good_f_auto_w_800_h_500/v1499339881/DO_NOT_USE_DISCOVER_INDIA_EDITORIAL/Jul_2016_Anchor_Augmbe_-_abbey-falls-kodagu-karnataka-india.jpg",
          "Datta",
          new Date(),
          5
        ),
        new Post(
          "Sport",
          "This is a beautiful sport",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/220px-Virat_Kohli_in_PMO_New_Delhi.jpg",
          "Datta",
          new Date(),
          9
        ),
        new Post(
          "Potitics", 
          "This is a brilliant leader", 
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Prime_Minister_of_India_Narendra_Modi.jpg/640px-Prime_Minister_of_India_Narendra_Modi.jpg", 
          "Datta", 
          new Date(),
          3
        ),
      
      ];

      // Facility 1
      getPosts(){
        return this.listOfPosts;
      }
      
      //Facility 2
      deletePost(index: number){
        this.listOfPosts.splice(index,1);
      }

      //Facility 3
      addPost(post: Post){
        this.listOfPosts.push(post);
      }

      //Facility 4
      updatepost(index: number, post:Post){
        this.listOfPosts[index] = post;
      }

      //Facility 5
      getPost(index: number){
        return this.listOfPosts[index];
      }

      //Facility 6
      likePost(index: number){
        this.listOfPosts[index].numberOfLikes += 1;
      }

      //Facility 7
      setPosts(listOfPosts: Post[]){
        this.listOfPosts = listOfPosts;
        this.listChangedEvent.emit(listOfPosts);
      }
      
}