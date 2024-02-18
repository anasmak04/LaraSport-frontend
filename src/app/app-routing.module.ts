import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './admin/_auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './admin/category/category.component';
import { PostComponent } from './admin/post/post.component';
import { TagsComponent } from './admin/tags/tags.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { LoginComponent } from './admin/_auth/login/login.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'post', component: PostComponent},
  { path: 'tags', component: TagsComponent},
  { path: 'add-post', component: AddPostComponent},
  { path: 'edit-post', component: EditPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
