import { Injectable } from '@angular/core';
import { CategoryServiceService } from '../category/category-service.service';
import { TagsServiceService } from '../tags/tags-service.service';
import { PostServiceService } from './post-service.service';

@Injectable({
  providedIn: 'root'
})
export class PostFacadeService {

  constructor(
    private categoryservice: CategoryServiceService,
    private tagsservice: TagsServiceService,
    private postservice: PostServiceService,
  ) { }

  findAllCategories(){
    return this.categoryservice.findAll();
  }

  findAllTags(){
    return this.tagsservice.findAll();
  }

  addPost(post: any){
    return this.postservice.save(post);
  }
  
}
