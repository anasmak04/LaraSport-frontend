import { Component, OnInit, inject } from "@angular/core";
import { Observable } from "rxjs";
import { PostServiceService } from "../../services/post/post-service.service";
import { Router } from "@angular/router";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  
  constructor(
    private postservice: PostServiceService,
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

  addPost() {
    this.router.navigate(["add-post"]);
  }

  edit() {
    this.router.navigate(["edit-post"]);
  }

  delete(id: number) {
    this.postservice.delete(id).subscribe({
      next: () => {
        console.log("post successfullt deleted ");
        this.findAll();
      },
      error: (err) => console.log(err),
    });
  }
  
}
