import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingRoutingModule } from './client-routing-routing.module';
import { ClubComponent } from "./club/club.component";
import { CityComponent } from "./city/city.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { EventComponent } from "./event/event.component";
import { ContactComponent } from "./contact/contact.component";
import { ClubDetailsComponent } from './club-details/club-details.component';
import { PostComponent } from "./post/post.component";
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from '../shared/interceptors/loader/loader.interceptor';


@NgModule({
  declarations: [
    ClubComponent,
    CityComponent,
    EventDetailsComponent,
    ContactComponent,
    ClubDetailsComponent,
    PostComponent,
    EventComponent,
    
  ],
  imports: [
    CommonModule,
    ClientRoutingRoutingModule,
    SharedModule,
  ],

  exports : [
    ClientRoutingRoutingModule,
    ClubComponent,
    CityComponent,
    EventDetailsComponent,
    ContactComponent,
    ClubDetailsComponent,
    PostComponent,
    EventComponent
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS,useClass:LoaderInterceptor, multi : true}
  ],

})
export class ClientModuleModule { }
