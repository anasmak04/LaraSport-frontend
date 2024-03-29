import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./admin/_auth/register/register.component";
import { CategoryComponent } from "./admin/category/category.component";
import { PostComponent } from "./client/post/post.component";
import { TagsComponent } from "./admin/tags/tags.component";
import { AddPostComponent } from "./admin/add-post/add-post.component";
import { EditPostComponent } from "./components/edit-post/edit-post.component";
import { LoginComponent } from "./admin/_auth/login/login.component";
import { PostDetailsComponent } from "./components/post-details/post-details.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ClubComponent } from "./client/club/club.component";
import { CityComponent } from "./client/city/city.component";
import { EventComponent } from "./client/event/event.component";
import { ContactComponent } from "./client/contact/contact.component";
import { EventDetailsComponent } from "./client/event-details/event-details.component";
import { AdminPostComponent } from "./admin/admin-post/admin-post.component";
import { UsersComponent } from "./admin/users/users.component";
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { AdminCityComponent } from "./admin/admin-city/admin-city.component";
import { AdminClubComponent } from "./admin/admin-club/admin-club.component";
import { AddClubComponent } from "./admin/add-club/add-club.component";
import { AdminEventComponent } from "./admin/admin-event/admin-event.component";
import { guardRoleGuard } from "./shared/guard/guard-role.guard";
import { AccessDeniedComponent } from "./shared/components/permission/access-denied/access-denied.component";
import { AddEventComponent } from "./admin/add-event/add-event.component";
import { ClubDetailsComponent } from "./client/club-details/club-details.component";

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "add-post", component: AddPostComponent },
  { path: "edit-post", component: EditPostComponent },
  { path: "post", component: PostComponent },
  { path: "post-details/:id", component: PostDetailsComponent },
  { path: "city", component: CityComponent },
  { path: "event", component: EventComponent },
  { path: "contact", component: ContactComponent },

  {
    path: "admin/post",
    canActivate: [guardRoleGuard],
    component: AdminPostComponent,
  },

  {
    path: "admin/add/post",
    component: AddPostComponent,
  },
  {
    path: "admin/dashboard",
    canActivate: [guardRoleGuard],
    component: DashboardComponent,
  },
  { path: "admin/category", component: CategoryComponent },
  {
    path: "admin/tags",
    canActivate: [guardRoleGuard],
    component: TagsComponent,
  },
  {
    path: "admin/users",
    canActivate: [guardRoleGuard],
    component: UsersComponent,
  },
  {
    path: "admin/city",
    canActivate: [guardRoleGuard],
    component: AdminCityComponent,
  },
  {
    path: "admin/club",
    canActivate: [guardRoleGuard],
    component: AdminClubComponent,
  },
  {
    path: "admin/event",
    canActivate: [guardRoleGuard],
    component: AdminEventComponent,
  },

  {
    path: "admin/add/event",
    canActivate: [guardRoleGuard],
    component: AddEventComponent,
  },
  {
    path: "admin/add/club",
    canActivate: [guardRoleGuard],
    component: AddClubComponent,
  },
  { path: "event/:id", component: EventDetailsComponent },
  { path: "city/club/:id", component: ClubComponent },
  { path: "club/:id", component: ClubDetailsComponent },
  { path: "access-denied", component: AccessDeniedComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
