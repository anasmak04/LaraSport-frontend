import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostServiceService } from '../services/post/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postservice : PostServiceService){}

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


 


}
