import { Component, OnInit, inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CategoryServiceService } from "../../services/category/category-service.service";
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

  constructor(
    private categoryService: CategoryServiceService,
    private fb: FormBuilder,
    private sweet: AlertService
  ) {
    this.categoryForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
    });
  }


  loader = inject(LoaderServiceService);


  categories: any[] = [];

  showModal: boolean = false;
  showModalUpdate: boolean = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  ngOnInit(): void {
    this.findAll();
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

  add() {
    if (this.categoryForm.valid) {
      this.categoryService.save(this.categoryForm.value).subscribe({
        next: () => {
          this.sweet.showSuccess(
            "Category added",
            "Category added successfully"
          );
          this.categoryForm.reset();
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
        this.sweet.showError(
          "Category deleted",
          "Category deleted successfully"
        );
      },
      error: (err) => console.log(err),
    });
  }


  update(id : number) {
    if (this.categoryForm.valid) {
      this.categoryService.update(id,this.categoryForm.value).subscribe({
        next: () => {
          this.sweet.showSuccess(
            "Category updated",
            "Category updated successfully"
          );
          this.categoryForm.reset();
          this.showModalUpdate = false;
        },
        error: (err) => {
          this.sweet.showError("Error", "Category not updated");
          console.error(err);
        },
      });
    }
  }

  findbyid(id: number) {
    this.categoryService.findById(id).subscribe({
      next: (response) => {
        this.categoryForm.patchValue(response);
        this.showModalUpdate = true;
      },
      error: (err) => console.log(err),
    });
  }


}
