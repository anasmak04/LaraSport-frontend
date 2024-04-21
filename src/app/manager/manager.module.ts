import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ClubComponent } from './club/club.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ClientRoutingRoutingModule } from './manager-routing-routing.module';

@NgModule({
  declarations: [
    ClubComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientRoutingRoutingModule
  ],

  exports : [
    SharedModule,
    ClubComponent,
    ClientRoutingRoutingModule,
    ReservationComponent
  ]
})
export class ManagerModule { }
