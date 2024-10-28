import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {


  @Input() post?: Post;
  @Input() index: number = 0;
  constructor(private postService: PostService, private roter: Router){

  }

  ngOnInit(): void {
    console.log(this.post);
    
  }

  onDelete(){
   this.postService.deletePost(this.index); 
  }

  onEdit(){
    this.roter.navigate(["/post-edit",this.index])
  }

  likePost(){
    this.postService.likePost(this.index)
  }
}
