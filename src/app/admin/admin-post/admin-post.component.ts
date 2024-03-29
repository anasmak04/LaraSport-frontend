import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from "src/app/services/alert/alert.service";
import { CategoryServiceService } from "src/app/services/category/category-service.service";
import { PostServiceService } from "src/app/services/post/post-service.service";
import { TagsServiceService } from "src/app/services/tags/tags-service.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-admin-post",
  templateUrl: "./admin-post.component.html",
  styleUrls: ["./admin-post.component.css"],
})
export class AdminPostComponent implements OnInit {
  posts: any[] = [];
  message: string | undefined;

  constructor(
    private postservice: PostServiceService,
    private sweet: AlertService,
    private router : Router
  ) {}


  handleadd(){
    this.router.navigate(['/admin/add/post']);
  }

  ngOnInit(): void {
    this.findallposts();
  }

  findallposts() {
    this.postservice.findAll().subscribe({
      next: (response) => {
        this.posts = response.post;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
