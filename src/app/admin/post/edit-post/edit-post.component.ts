import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CategoryServiceService } from "src/app/services/admin/category/category-service.service";
import { PostServiceService } from "src/app/services/admin/post/post-service.service";
import { TagsServiceService } from "src/app/services/admin/tags/tags-service.service";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.css"],
})
export class EditPostComponent implements OnInit {
  PostForm: FormGroup;
  postId: number = 0;
  categories: any[] = [];
  tags: any[] = [];

  constructor(
    private categoryService: CategoryServiceService,
    private tagsService: TagsServiceService,
    private postService: PostServiceService,
    private fb: FormBuilder,
    private route: ActivatedRoute
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
    this.postId = this.route.snapshot.params["id"];
    this.loadPostData(this.postId);
    this.findAllCategories();
    this.findAllTags();
  }

  loadPostData(id: number) {
    this.postService.findById(id).subscribe({
      next: (response) => {
        this.PostForm.setValue({
          title: response.post.title,
          content: response.post.content,
          publish_date: response.post.publish_date,
          category_id: response.post.category_id,
          tags: response.post.tags.map((tag) => tag.id),
        });
      },
      error: (err) => console.log(err),
    });
  }

  findAllCategories() {
    this.categoryService.findAll().subscribe({
      next: (response) => {
        this.categories = response.categories;
      },
      error: (err) => console.log(err),
    });
  }

  findAllTags() {
    this.tagsService.findAll().subscribe({
      next: (response) => {
        this.tags = response.tags;
      },
      error: (err) => console.log(err),
    });
  }

  updatePost() {
    console.log("Form Value: ", this.PostForm.value);
    console.log("Form Validity: ", this.PostForm.valid);

    if (this.PostForm.valid) {
      this.postService.update(this.postId, this.PostForm.value).subscribe({
        next: (post) => {
          console.log("Post updated successfully:", post);
        },
        error: (err) => console.log("Error updating post:", err),
      });
    } else {
      console.log("Validation failed");
    }
  }
}
