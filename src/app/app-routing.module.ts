import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./admin/_auth/register/register.component";
import { EditPostComponent } from "./components/edit-post/edit-post.component";
import { LoginComponent } from "./admin/_auth/login/login.component";
import { PostDetailsComponent } from "./components/post-details/post-details.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AccessDeniedComponent } from "./shared/components/permission/access-denied/access-denied.component";

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },

  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin-module.module").then((m) => m.AdminmoduleModule),
  },

  {
    path: "manager",
    loadChildren: () =>
      import("./club-manager/manager.module").then((m) => m.ManagerModule),
  },

  {
    path: "",
    loadChildren: () =>
      import("./client/client-module.module").then((m) => m.ClientModuleModule),
  },

  { path: "post-details/:id", component: PostDetailsComponent },
  { path: "edit-post", component: EditPostComponent },

  { path: "access-denied", component: AccessDeniedComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
