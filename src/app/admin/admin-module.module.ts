import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClubComponent } from './club/add-club/add-club.component';
import { CategoryComponent } from './category/category.component';
import { TagsComponent } from './tags/tags.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminCityComponent } from './admin-city/admin-city.component';
import { AdminClubComponent } from './club/admin-club/admin-club.component';
import { AdminEventComponent } from './event/admin-event/admin-event.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from "@angular/forms";
import { CardsComponent } from '../components/cards/cards.component';
import { EditorModule } from "@tinymce/tinymce-angular";
import { TagModule } from "primeng/tag";
import { AddTagsComponent } from '../components/add-tags/add-tags.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { AddCategoryComponent } from '../components/add-category/add-category.component';
import { EditCategoryComponent } from '../components/edit-category/edit-category.component';
import { EditTagsComponent } from '../components/edit-tags/edit-tags.component';
import { MultiSelectModule } from "primeng/multiselect";
import { AddEventComponent } from './event/add-event/add-event.component';
import { AdminPostComponent } from './post/admin-post/admin-post.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { AdminRoutingRoutingModule } from './admin-routing-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { ClubtagsComponent } from './clubtags/clubtags.component';
import { EditClubComponent } from './club/edit-club/edit-club.component';


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
    AddTagsComponent,
    EditPostComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    EditTagsComponent,
    AddEventComponent,
    AddPostComponent,
    ClubtagsComponent,
    EditClubComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    EditorModule,
    TagModule,
    MultiSelectModule,
    AdminRoutingRoutingModule,
    MatDialogModule
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
    AddTagsComponent,
    EditPostComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    EditTagsComponent,
    MultiSelectModule,
    ReactiveFormsModule,
    AddPostComponent,
    AdminRoutingRoutingModule,
    MatDialogModule,
    ClubtagsComponent,
    EditClubComponent
  ]
})
export class AdminmoduleModule { }
