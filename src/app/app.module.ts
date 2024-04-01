import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AdminmoduleModule } from "./admin/admin-module.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./admin/_auth/register/register.component";
import {HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./admin/_auth/login/login.component";
import { MessagesModule } from "primeng/messages";
import { PostDetailsComponent } from "./components/post-details/post-details.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { ClientModuleModule } from "./client/client-module.module";
import { FormsModule } from "@angular/forms";
import { RatingModule } from "primeng/rating";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundComponent,
    PostDetailsComponent,
  ],
  imports: [
    // StoreModule.forRoot({categories: categoryReducer}),
    // EffectsModule.forRoot([]),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    // }),
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
    ClientModuleModule
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
