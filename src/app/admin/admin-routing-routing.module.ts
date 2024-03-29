import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { guardRoleGuard } from "../shared/guard/guard-role.guard";
import { AdminPostComponent } from "./admin-post/admin-post.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CategoryComponent } from "./category/category.component";
import { TagsComponent } from "./tags/tags.component";
import { UsersComponent } from "./users/users.component";
import { AdminCityComponent } from "./admin-city/admin-city.component";
import { AdminClubComponent } from "./admin-club/admin-club.component";
import { AdminEventComponent } from "./admin-event/admin-event.component";
import { AddEventComponent } from "./add-event/add-event.component";
import { AddClubComponent } from "./add-club/add-club.component";

const routes: Routes = [
  {
    path: "post",
    canActivate: [guardRoleGuard],
    component: AdminPostComponent,
  },

  {
    path: "add/post",
    component: AddPostComponent,
  },
  {
    path: "dashboard",
    canActivate: [guardRoleGuard],
    component: DashboardComponent,
  },
  {
    path: "category",
    canActivate: [guardRoleGuard],
    component: CategoryComponent,
  },
  {
    path: "tags",
    canActivate: [guardRoleGuard],
    component: TagsComponent,
  },
  {
    path: "users",
    canActivate: [guardRoleGuard],
    component: UsersComponent,
  },
  {
    path: "city",
    canActivate: [guardRoleGuard],
    component: AdminCityComponent,
  },
  {
    path: "club",
    canActivate: [guardRoleGuard],
    component: AdminClubComponent,
  },
  {
    path: "event",
    canActivate: [guardRoleGuard],
    component: AdminEventComponent,
  },

  {
    path: "add/event",
    canActivate: [guardRoleGuard],
    component: AddEventComponent,
  },
  {
    path: "add/club",
    canActivate: [guardRoleGuard],
    component: AddClubComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingRoutingModule {}
