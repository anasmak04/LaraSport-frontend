import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from 'src/app/services/admin/post/post-service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: any ;

  constructor(
    private route: ActivatedRoute,
    private postService: PostServiceService 
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const postId = params['id']; 
      this.fetchPostDetails(postId);
    });

    this.findAll();
  }

  posts: any[] = [];

  findAll() {
    this.postService.findAll().subscribe({
      next: (response) => {
        this.posts = response.post;
        console.log(this.posts);
      },

      error: (err) => console.log(err),
    });
  }


  fetchPostDetails(postId: number) {
    this.postService.findById(postId).subscribe(response => {
      this.post = response.post;
      console.log(this.post);
    });
  }




  

}
