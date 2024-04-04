import { Component, OnInit } from "@angular/core";
import { PostServiceService } from "src/app/services/post/post-service.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-blog-home",
  templateUrl: "./blog-home.component.html",
  styleUrl: "./blog-home.component.css",
})
export class BlogHomeComponent implements OnInit{
  constructor(private blogservice: PostServiceService) {}
  ngOnInit(): void {
    this.getPosts();

  }
   posts : any = [];


  getPosts() {
    this.blogservice
      .findAll()
      .pipe(map((posts) => posts.post.slice(0,3)))
      .subscribe((response) => {
        this.posts = response;
        console.log(this.posts);
        console.log("Posts");
      });
  }
}
