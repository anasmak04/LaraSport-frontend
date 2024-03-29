import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AlertService } from "src/app/services/alert/alert.service";
import { CategoryServiceService } from "src/app/services/category/category-service.service";
import { PostServiceService } from "src/app/services/post/post-service.service";
import { TagsServiceService } from "src/app/services/tags/tags-service.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  PostForm: FormGroup;
  categories: any[] = [];
  tags: any[] = [];
  message: string | undefined;

  constructor(
    private categoryservice: CategoryServiceService,
    private tagsservice: TagsServiceService,
    private postservice: PostServiceService,
    private fb: FormBuilder,
    private alertService: AlertService
  ) {
    this.PostForm = this.fb.group({
      title: ["", Validators.required],
      content: ["", Validators.required],
      category_id: ["", Validators.required],
      tags: ["", Validators.required],
      image: [""],
    });
  }

  ngOnInit(): void {
    this.findAllCategories();
    this.findAllTags();
  }

  save() {
    if (this.PostForm.valid) {
      const formData = new FormData();
      formData.append("title", this.PostForm.get("title")?.value);
      formData.append("content", this.PostForm.get("content")?.value);
      formData.append("category_id", this.PostForm.get("category_id")?.value);

      const tags = this.PostForm.get("tags")?.value;
      if (Array.isArray(tags)) {
        tags.forEach((tag) => {
          formData.append("tags[]", tag);
        });
      } else {
        console.warn("Tags are not in an array format.");
      }

      const fileInput: HTMLInputElement = document.querySelector('input[type="file"]')!;
      if (fileInput && fileInput.files && fileInput.files[0]) {
        formData.append("image", fileInput.files[0]);
      }

      this.postservice.save(formData).subscribe({
        next: () => {
          this.alertService.showSuccess("Post", "Post created successfully");
          this.PostForm.reset();
        },
        error: (error) => {
          this.alertService.showError("Post", "Post not created");
          console.log(error);
        },
      });
    }
  }

  findAllCategories() {
    this.categoryservice.findAll().subscribe({
      next: (result) => {
        this.categories = result.categories;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  findAllTags() {
    this.tagsservice.findAll().subscribe({
      next: (result) => {
        this.tags = result.tags;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
