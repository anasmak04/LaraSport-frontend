import { Component, OnInit, inject } from "@angular/core";
import { TagsServiceService } from "../../services/admin/tags/tags-service.service";
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

  confirmDelete = false;

  cancel() {
    this.confirmDelete = false;
  }

  toggleconfirmDelete() {
    this.confirmDelete = !this.confirmDelete;
  }

  constructor(
    private tagservice: TagsServiceService,
    private fb: FormBuilder,
    private sweet: AlertService
  ) {
    this.TagsForm = this.fb.group({
      id: [],
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
          this.findAll();
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

  update() {
    const id = this.TagsForm.value.id;
    console.log("Updating category with ID:", id); // Log the ID being used
    if (id && this.TagsForm.valid) {
      this.tagservice.update(id, this.TagsForm.value).subscribe({
        next: () => {
          this.sweet.showSuccess(
            "Category updated",
            "Category updated successfully"
          );
          this.TagsForm.reset();
          this.toggleModalUpdate();
          this.findAll();
        },
        error: (err) => {
          this.sweet.showError("Error", "Category not updated");
          console.error(err);
        },
      });
    }
  }

  findbyid(id: number) {
    this.tagservice.findById(id).subscribe({
      next: (response) => {
        console.log("Fetched tag:", response);
        if (response && response.tag) {
          this.TagsForm.patchValue({
            id: response.tag.id,
            name: response.tag.name,
          });
          this.showModalUpdate = true;
          console.log("Form Values after patch:", this.TagsForm.value);
        } else {
          console.error(
            "Tag data is missing in the response. Received:",
            response
          );
          this.sweet.showError(
            "Error",
            "No tag data found for the provided ID."
          );
        }
      },
      error: (err) => {
        console.error("Error fetching tag by ID:", err);
        this.sweet.showError("Error", "Error fetching tag data.");
      },
    });
  }
}
