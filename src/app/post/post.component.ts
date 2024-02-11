import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostServiceService } from '../services/post/post-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postservice : PostServiceService, private router : Router){}

  ngOnInit(): void {
    this.findAll();
  }


  posts : any[] = [];


  findAll()  {
    this.postservice.findAll().subscribe({
      next : (response) => {
          this.posts = response.post
      }, 

      error : (err) => console.log(err) 
    })
  }


  addPost(){
    this.router.navigate(["add-post"]);
  }


  edit(){
    this.router.navigate(["edit-post"]);
  }

 


}
