import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./_auth/register/register.component";
import { EditPostComponent } from "./admin/post/edit-post/edit-post.component";
import { LoginComponent } from "./_auth/login/login.component";
import { PostDetailsComponent } from "./client/post-details/post-details.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { AccessDeniedComponent } from "./shared/components/permission/access-denied/access-denied.component";
import { isBannedGuard } from "./shared/auth/is-banned.guard";

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
      import("./manager/manager.module").then((m) => m.ManagerModule),
  },

  {
    path: "",
    canActivate : [isBannedGuard],
    loadChildren: () =>
    import("./client/client-module.module").then((m) => m.ClientModuleModule),
  },
  

  { path: "edit-post", component: EditPostComponent },



  { path: "access-denied", component: AccessDeniedComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
