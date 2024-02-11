import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryServiceService } from 'src/app/services/category/category-service.service';
import { PostServiceService } from 'src/app/services/post/post-service.service';
import { TagsServiceService } from 'src/app/services/tags/tags-service.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{
  PostForm : FormGroup

  message : String = '';

  constructor(private postservice : PostServiceService, private fb : FormBuilder , private tagsservice : TagsServiceService,
    private categoryservice : CategoryServiceService){
    this.PostForm = this.fb.group({
      title: ["", Validators.required],
      content: ["", Validators.required],
      publish_date: ["", Validators.required],
      category_id: ["", Validators.required],
      tags: [[], Validators.required] 
    });
    
  }

  ngOnInit(): void {
    this.findAllTags();
    this.findAllCategories();
  }


  tags : any [] = [];
  categories : any [] = [];


  findAllCategories(){
    this.categoryservice.findAll().subscribe({
      next : (response) => {
          this.categories = response.categories
      }, 

      error :  (err) => console.log(err)
    })
  }


  findAllTags(){
    this.tagsservice.findAll().subscribe({
      next : (response) => {
          this.tags = response.tags
      }, 

      error :  (err) => console.log(err)
    })
  }


  save(){
    if(this.PostForm.valid){
      this.postservice.save(this.PostForm.value).subscribe({
        next : () => {
          this.message = "post create successfully";
          this.PostForm.reset();
        },

        error : (err) => console.log(err)
      });
    }
  }





}
