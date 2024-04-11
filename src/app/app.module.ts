import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AdminmoduleModule } from "./admin/admin-module.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./_auth/register/register.component";
import {HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./_auth/login/login.component";
import { MessagesModule } from "primeng/messages";
import { PostDetailsComponent } from "./admin/post/post-details/post-details.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { ClientModuleModule } from "./client/client-module.module";
import { FormsModule } from "@angular/forms";
import { RatingModule } from "primeng/rating";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ManagerModule } from "./manager/manager.module";
import { AuthInterceptor } from "./shared/interceptors/auth/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    RatingModule,
    AdminmoduleModule,
    ProgressSpinnerModule,
    ClientModuleModule,
    ManagerModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
