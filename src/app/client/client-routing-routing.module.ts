import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { CityComponent } from './city/city.component';
import { EventComponent } from './event/event.component';
import { ContactComponent } from './contact/contact.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ClubComponent } from './club/club.component';
import { ClubDetailsComponent } from './club-details/club-details.component';

const routes: Routes = [
  { path: "post", component: PostComponent },
  { path: "city", component: CityComponent },
  { path: "event", component: EventComponent },
  { path: "contact", component: ContactComponent },
  { path: "event/:id", component: EventDetailsComponent },
  { path: "city/club/:id", component: ClubComponent },
  { path: "club/:id", component: ClubDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingRoutingModule { }
