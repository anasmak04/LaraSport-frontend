import { Component, OnInit, inject } from "@angular/core";
import { PostServiceService } from "src/app/services/admin/post/post-service.service";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { EventServiceService } from "src/app/services/admin/event/event-service.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

@Component({
  selector: "app-blog-home",
  templateUrl: "./blog-home.component.html",
  styleUrl: "./blog-home.component.css",
})
export class BlogHomeComponent implements OnInit {
  constructor(
    private blogservice: PostServiceService,
    private eventservice: EventServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getPosts();
  }
  posts: any = [];
  events: any = [];

  loader = inject(LoaderServiceService);

  toblogs() {
    this.router.navigate(["/post"]);
  }

  getPosts() {
    this.blogservice
      .findAll()
      .pipe(map((posts) => posts.post.slice(0, 3)))
      .subscribe((response) => {
        this.posts = response;
        console.log(this.posts);
        console.log("Posts");
      });
  }


}
