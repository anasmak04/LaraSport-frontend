import { Component, OnInit, inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from "src/app/services/alert/alert.service";
import { CategoryServiceService } from "src/app/services/category/category-service.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";
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


  confirmDelete = false;

  cancel(){
    this.confirmDelete = false;
  }


  toggleconfirmDelete() {
    this.confirmDelete = !this.confirmDelete;
  }


  constructor(
    private postservice: PostServiceService,
    private sweet: AlertService,
    private router: Router
  ) {}

  loader = inject(LoaderServiceService);

  handleadd() {
    this.router.navigate(["/admin/add/post"]);
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

  findbyid(id: number) {
    this.postservice.findById(id).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  delete(id: number) {
    this.postservice.delete(id).subscribe({
      next: (response) => {
        this.sweet.showSuccess("Post Deleted", "Post deleted successfully");
        this.findallposts();
      },
      error: (err) => {
        this.sweet.showError("Post not deleted", "Post could not be deleted");
      },
    });
  }

  edit(id: number) {
    this.router.navigate(["/admin/edit/post", id]);
  }
}
