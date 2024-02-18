import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryServiceService } from '../../services/category/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryForm: FormGroup;
  message: string = '';

  constructor(
    private categoryService: CategoryServiceService,
    private fb: FormBuilder
  ) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }


  categories: any[] = [];
  

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
          this.message = 'Category added successfully!';
          this.categoryForm.reset(); 
        },
        error: (err) => {
          console.error(err);
          this.message = 'Failed to add category. Please try again.';
        }
      });
    }
  }

  delete(id : number){
    this.categoryService.delete(id).subscribe({
      next : () => console.log("category deleted"),
      error : (err) => console.log(err)
    })
  }


}


