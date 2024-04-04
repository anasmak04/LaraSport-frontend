import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientRoutingRoutingModule } from "./client-routing-routing.module";
import { ClubComponent } from "./club/club.component";
import { CityComponent } from "./city/city.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { EventComponent } from "./event/event.component";
import { ContactComponent } from "./contact/contact.component";
import { ClubDetailsComponent } from "./club-details/club-details.component";
import { PostComponent } from "./post/post.component";
import { SharedModule } from "../shared/shared.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderInterceptor } from "../shared/interceptors/loader/loader.interceptor";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { BlogHomeComponent } from "./blog-home/blog-home.component";
import { SportHomeComponent } from "./sport-home/sport-home.component";

@NgModule({
  declarations: [
    ClubComponent,
    CityComponent,
    EventDetailsComponent,
    ContactComponent,
    ClubDetailsComponent,
    PostComponent,
    EventComponent,
    SportHomeComponent,
    BlogHomeComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
  ],

  exports: [
    ClientRoutingRoutingModule,
    ClubComponent,
    CityComponent,
    EventDetailsComponent,
    ContactComponent,
    ClubDetailsComponent,
    PostComponent,
    EventComponent,
    SportHomeComponent,
    BlogHomeComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
})
export class ClientModuleModule {}
