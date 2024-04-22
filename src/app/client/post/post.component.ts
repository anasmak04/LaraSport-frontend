import { Component, OnInit, inject } from "@angular/core";
import { Observable } from "rxjs";
import { PostServiceService } from "../../services/admin/post/post-service.service";
import { Router } from "@angular/router";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";
import { PostclientService } from "src/app/services/client/post/postclient.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  
  constructor(
    private postservice: PostclientService,
    private router: Router
  ) {}

  loader = inject(LoaderServiceService);

  ngOnInit(): void {
    this.findAll();
  }

  readMore(postId: number) {
    this.router.navigate(['/posts', postId]);
  }

  
  posts: any[] = [];

  findAll() {
    this.postservice.findAll().subscribe({
      next: (response) => {
        this.posts = response.post;
        console.log(this.posts);
      },

      error: (err) => console.log(err),
    });
  }




  }
 
  





