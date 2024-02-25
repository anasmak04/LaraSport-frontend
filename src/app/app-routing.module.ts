import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './admin/_auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './admin/category/category.component';
import { PostComponent } from './client/post/post.component';
import { TagsComponent } from './admin/tags/tags.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { LoginComponent } from './admin/_auth/login/login.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClubComponent } from './client/club/club.component';
import { CityComponent } from './client/city/city.component';
import { EventComponent } from './client/event/event.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'tags', component: TagsComponent},
  { path: 'add-post', component: AddPostComponent},
  { path: 'edit-post', component: EditPostComponent},
  { path: 'post', component: PostComponent },
  { path: 'post-details/:id', component: PostDetailsComponent },
  { path: 'city', component: CityComponent },
  { path: 'event', component: EventComponent },
  { path: 'city/club/:id', component: ClubComponent },
  { path: '**', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
