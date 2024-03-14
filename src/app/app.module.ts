import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './admin/_auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './admin/category/category.component';
import { TagsComponent } from './admin/tags/tags.component';
import { PostComponent } from './client/post/post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { AddTagsComponent } from './components/add-tags/add-tags.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { EditTagsComponent } from './components/edit-tags/edit-tags.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { LoginComponent } from './admin/_auth/login/login.component';
import { SharedModule } from './shared/shared.module';
import { MessagesModule } from 'primeng/messages';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClubComponent } from './client/club/club.component';
import { CityComponent } from './client/city/city.component';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { EventComponent } from './client/event/event.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './client/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    CategoryComponent,
    TagsComponent,
    PostComponent,
    AddPostComponent,
    EditPostComponent,
    AddTagsComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    EditTagsComponent,
    PostDetailsComponent,
    NotFoundComponent,
    ClubComponent,
    CityComponent,
    EventComponent,
    DashboardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    SharedModule,
    MessagesModule,
    RatingModule,
    TagModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
