import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AdminmoduleModule } from "./admin/adminmodule.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./admin/_auth/register/register.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { PostComponent } from "./client/post/post.component";
import { GoogleMapsModule } from "@angular/google-maps";
import { LoginComponent } from "./admin/_auth/login/login.component";
import { MessagesModule } from "primeng/messages";
import { PostDetailsComponent } from "./components/post-details/post-details.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ClubComponent } from "./client/club/club.component";
import { CityComponent } from "./client/city/city.component";
import { RatingModule } from "primeng/rating";
import { EventComponent } from "./client/event/event.component";
import { ContactComponent } from "./client/contact/contact.component";
import { EventDetailsComponent } from "./client/event-details/event-details.component";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoaderInterceptor } from "./shared/interceptors/loader/loader.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PostComponent,
    PostDetailsComponent,
    NotFoundComponent,
    ClubComponent,
    CityComponent,
    EventComponent,
    ContactComponent,
    EventDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    MessagesModule,
    RatingModule,
    AdminmoduleModule,
    ProgressSpinnerModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS,useClass:LoaderInterceptor, multi : true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
