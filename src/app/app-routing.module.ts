import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { TagsComponent } from './tags/tags.component';
import { AddPostComponent } from './components/add-post/add-post.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'post', component: PostComponent},
  { path: 'tags', component: TagsComponent},
  { path: 'add-post', component: AddPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
