import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CategoryServiceService } from "src/app/services/category/category-service.service";
import { PostServiceService } from "src/app/services/post/post-service.service";
import { TagsServiceService } from "src/app/services/tags/tags-service.service";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.css"],
})
export class EditPostComponent implements OnInit {
  PostForm: FormGroup;

  constructor(
    private categoryservice: CategoryServiceService,
    private tagsservice: TagsServiceService,
    private postservice: PostServiceService,
    private fb: FormBuilder
  ) {
    this.PostForm = this.fb.group({
      title: ["", Validators.required],
      content: ["", Validators.required],
      publish_date: ["", Validators.required],
      category_id: ["", Validators.required],
      tags: [[], Validators.required],
    });
  }

  ngOnInit(): void {
    this.findAllCategories();
    this.findAllTags();
  }

  tags: any[] = [];
  categories: any[] = [];
  posts: any = [];

  findById(id: number) {
    this.postservice.findById(id).subscribe({
      next: (data) => {
        this.posts = data.post;
        console.log(this.posts);
        this.PostForm.patchValue({
          title: this.posts.title,
          content: this.posts.content,
          publish_date: this.posts.publish_date,
          category_id: this.posts.category_id,
        });
      },
      error: (err) => console.log(err),
    });
  }

  findAllCategories() {
    this.categoryservice.findAll().subscribe({
      next: (response) => {
        this.categories = response.categories;
      },
      error: (err) => console.log(err),
    });
  }

  findAllTags() {
    this.tagsservice.findAll().subscribe({
      next: (response) => {
        this.tags = response.tags;
      },
      error: (err) => console.log(err),
    });
  }

  update(id: number) {
    this.postservice.update(id, this.PostForm.value).subscribe({
      next: (post) => {
        console.log("post updated", post);
      },
      error: (err) => console.log(err),
    });
  }
}
