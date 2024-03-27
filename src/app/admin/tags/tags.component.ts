import { Component, OnInit, inject } from "@angular/core";
import { TagsServiceService } from "../../services/tags/tags-service.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/services/alert/alert.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

@Component({
  selector: "app-tags",
  templateUrl: "./tags.component.html",
  styleUrls: ["./tags.component.css"],
})
export class TagsComponent implements OnInit {
  TagsForm: FormGroup;


  constructor(
    private tagservice: TagsServiceService,
    private fb: FormBuilder,
    private sweet: AlertService
  ) {
    this.TagsForm = this.fb.group({
      name: ["", Validators.required],
    });
  }

  loader = inject(LoaderServiceService);


  tags: any[] = [];

  showModal: boolean = false;
  showModalUpdate: boolean = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  toggleModalUpdate() {
    this.showModalUpdate = !this.showModalUpdate;
  }

  ngOnInit(): void {
    this.findAll();
  }

  save() {
    if (this.TagsForm.valid) {
      this.tagservice.save(this.TagsForm.value).subscribe({
        next: () => {
          this.sweet.showSuccess("tags added", "tags added successfully");
          this.TagsForm.reset();
        },

        error: (err) => {
          this.sweet.showError("Error", "Error adding tags");
        },
      });
    }
  }

  delete(id: number): void {
    this.tagservice.delete(id).subscribe({
      next: () =>
        this.sweet.showSuccess("tags deleted", "tags deleted successfully"),
      error: () => this.sweet.showError("Error", "Error deleting tags"),
    });
  }

  findAll() {
    this.tagservice.findAll().subscribe({
      next: (data) => {
        this.tags = data.tags;
        console.log(this.tags);
      },
      error: (err) => console.error(err),
    });
  }

  update(id: number) {
    this.tagservice.update(id, this.TagsForm.value).subscribe({
      next: (category) => {
        this.sweet.showSuccess("tags updated", "tags updated successfully");
      },

      error: (err) => this.sweet.showError("Error", "Error updating tags"),
    });
  }
}
