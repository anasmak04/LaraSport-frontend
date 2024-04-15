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
import { CardsComponent } from '../shared/components/cards/cards.component';
import { EditorModule } from "@tinymce/tinymce-angular";
import { TagModule } from "primeng/tag";
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { MultiSelectModule } from "primeng/multiselect";
import { AddEventComponent } from './event/add-event/add-event.component';
import { AdminPostComponent } from './post/admin-post/admin-post.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { AdminRoutingRoutingModule } from './admin-routing-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { ClubtagsComponent } from './clubtags/clubtags.component';
import { EditClubComponent } from './club/edit-club/edit-club.component';
import { EditEventComponent } from './event/edit-event/edit-event.component';

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
    EditPostComponent,
    AddEventComponent,
    AddPostComponent,
    ClubtagsComponent,
    EditClubComponent,
    EditEventComponent
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
    EditPostComponent,
    MultiSelectModule,
    ReactiveFormsModule,
    AddPostComponent,
    AdminRoutingRoutingModule,
    MatDialogModule,
    ClubtagsComponent,
    EditClubComponent,
    EditEventComponent
  ]
})
export class AdminmoduleModule { }
