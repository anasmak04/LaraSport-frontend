import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { CityComponent } from './city/city.component';
import { EventComponent } from './event/event.component';
import { ContactComponent } from './contact/contact.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ClubComponent } from './club/club.component';
import { ClubDetailsComponent } from './club-details/club-details.component';
import { HomeComponent } from './home/home.component';
import { ClubResultComponent } from './club-result/club-result.component';
import { SportHomeComponent } from './sport-home/sport-home.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "post", component: PostComponent },
  { path: "club-result", component: ClubResultComponent },
  { path: "city", component: CityComponent },
  { path: "event", component: EventComponent },
  { path: "contact", component: ContactComponent },
  { path: "tags", component: SportHomeComponent },
  { path: "event/:id", component: EventDetailsComponent },
  { path: "city/club/:id", component: ClubComponent },
  { path: "club/:id", component: ClubDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingRoutingModule { }
