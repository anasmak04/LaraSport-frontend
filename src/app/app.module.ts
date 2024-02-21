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
import { PostComponent } from './admin/post/post.component';
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
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    SharedModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
