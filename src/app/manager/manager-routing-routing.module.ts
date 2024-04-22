import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReservationComponent } from "./reservation/reservation.component";
import { ClubComponent } from "./club/club.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "reservation", component: ReservationComponent },
  { path: "club", component: ClubComponent },
  { path: "dashboard", component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingRoutingModule {}
