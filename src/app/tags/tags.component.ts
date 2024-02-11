import { Component, OnInit } from "@angular/core";
import { TagsServiceService } from "../services/tags/tags-service.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-tags",
  templateUrl: "./tags.component.html",
  styleUrls: ["./tags.component.css"],
})
export class TagsComponent implements OnInit {
  TagsForm: FormGroup;

  message: String = "";

  constructor(private tagservice: TagsServiceService, private fb: FormBuilder) {
    this.TagsForm = this.fb.group({
      name: ["", Validators.required],
    });
  }

  tags: any[] = [];


  ngOnInit(): void {
    this.findAll();
  }

  save() {
    if (this.TagsForm.valid) {
      this.tagservice.save(this.TagsForm.value).subscribe({
        next: () => {
          this.message = "tags added successfully";
          this.TagsForm.reset();
        },

        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  delete(id: number): void {
    this.tagservice.delete(id).subscribe({
      next: () => console.log("tags deleted"),
      error: (err) => console.log(err),
    });
  }

  findAll() {
    this.tagservice.findAll().subscribe({
      next: (data) => {
        this.tags = data.tags
        console.log(this.tags)
      },
      error: (err) => console.error(err),
    });
  }

  update(id: number) {
    this.tagservice.update(id, this.TagsForm.value).subscribe({
      next: (category) => {
        console.log("category updated", category);
      },

      error: (err) => console.log(err),
    });
  }
}
