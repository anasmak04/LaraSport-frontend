import { Component, OnInit, inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CategoryServiceService } from "../../services/admin/category/category-service.service";
import Swal from "sweetalert2";
import { AlertService } from "src/app/services/alert/alert.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit {
  categoryForm: FormGroup;
  message: string = "";
  confirmDelete: boolean = false;
  categories: any[] = [];
  showModal: boolean = false;
  showModalUpdate: boolean = false;

  cancel() {
    this.confirmDelete = false;
  }

  constructor(
    private categoryService: CategoryServiceService,
    private fb: FormBuilder,
    private sweet: AlertService
  ) {
    this.categoryForm = this.fb.group({
      id: [],
      name: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  loader = inject(LoaderServiceService);

  ngOnInit(): void {
    this.findAll();
  }

  toggleModalUpdate() {
    this.showModalUpdate = !this.showModalUpdate;
  }

  toggleconfirmDelete() {
    this.confirmDelete = !this.confirmDelete;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  findbyid(id: number) {
    this.categoryService.findById(id).subscribe({
      next: (response) => {
        console.log("Fetched category:", response);
        if (response && response.category) {
          this.categoryForm.patchValue({
            id: response.category.id,
            name: response.category.name,
            description: response.category.description,
          });
          this.showModalUpdate = true;
          console.log("Form Values after patch:", this.categoryForm.value);
        } else {
          console.error("Category data is missing in the response");
        }
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  update() {
    const id = this.categoryForm.value.id;
    console.log("Updating category with ID:", id);
    if (id && this.categoryForm.valid) {
      this.categoryService.update(id, this.categoryForm.value).subscribe({
        next: () => {
          this.sweet.showSuccess(
            "Category updated",
            "Category updated successfully"
          );
          this.categoryForm.reset();
          this.toggleModalUpdate();
          this.findAll();
        },
        error: (err) => {
          this.sweet.showError("Error", "Category not updated");
          console.error(err);
        },
      });
    } else {
      console.error("Invalid form submission:", this.categoryForm.value);
      this.sweet.showError("Error", "Invalid form data");
    }
  }

  findAll() {
    this.categoryService.findAll().subscribe({
      next: (response) => {
        this.categories = response.categories;
        console.log(this.categories);
      },
      error: (err) => console.log(err),
    });
  }

  currentPage = 1;

  add() {
    if (this.categoryForm.valid) {
      this.categoryService.save(this.categoryForm.value).subscribe({
        next: () => {
          this.sweet.showSuccess(
            "Category added",
            "Category added successfully"
          );
          this.categoryForm.reset();
          this.findAll();
          this.showModal = true;
        },
        error: (err) => {
          this.sweet.showError("Error", "Category not added");
          console.error(err);
        },
      });
    }
  }

  delete(id: number) {
    this.categoryService.delete(id).subscribe({
      next: () => {
        this.sweet.showSuccess("deleted", "Category deleted successfully");
        this.findAll();
        this.confirmDelete = true;
      },
      error: (err) => {
        this.sweet.showError("Error", "Category not deleted");
        console.log(err);
      },
    });
  }
}
