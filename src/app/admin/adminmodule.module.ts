import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClubComponent } from './add-club/add-club.component';
import { CategoryComponent } from './category/category.component';
import { TagsComponent } from './tags/tags.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { AdminCityComponent } from './admin-city/admin-city.component';
import { AdminClubComponent } from './admin-club/admin-club.component';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from "@angular/forms";
import { CardsComponent } from '../components/cards/cards.component';
import { EditorModule } from "@tinymce/tinymce-angular";
import { TagModule } from "primeng/tag";
import { AddPostComponent } from '../components/add-post/add-post.component';
import { AddTagsComponent } from '../components/add-tags/add-tags.component';
import { EditPostComponent } from '../components/edit-post/edit-post.component';
import { AddCategoryComponent } from '../components/add-category/add-category.component';
import { EditCategoryComponent } from '../components/edit-category/edit-category.component';
import { EditTagsComponent } from '../components/edit-tags/edit-tags.component';
import { MultiSelectModule } from "primeng/multiselect";


@NgModule({
  declarations: [
    AddClubComponent,
    CategoryComponent,
    TagsComponent,
    UsersComponent,
    DashboardComponent,
    AdminPostComponent,
    AdminCityComponent,
    AdminClubComponent,
    AdminEventComponent,
    CardsComponent,
    AddPostComponent,
    AddTagsComponent,
    EditPostComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    EditTagsComponent
    
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    EditorModule,
    TagModule,
    MultiSelectModule
  ],

  exports : [
    AddClubComponent,
    CategoryComponent,
    TagsComponent,
    UsersComponent,
    DashboardComponent,
    AdminPostComponent,
    AdminCityComponent,
    AdminClubComponent,
    AdminEventComponent,
    SharedModule,
    CardsComponent,
    EditorModule,
    TagModule,
    AddPostComponent,
    AddTagsComponent,
    EditPostComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    EditTagsComponent,
    MultiSelectModule
  ]
})
export class AdminmoduleModule { }
