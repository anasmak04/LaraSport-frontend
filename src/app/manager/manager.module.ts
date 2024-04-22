import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ClubComponent } from './club/club.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ClientRoutingRoutingModule } from './manager-routing-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    ClubComponent,
    ReservationComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientRoutingRoutingModule,
    NgApexchartsModule
    
  ],

  exports : [
    NgApexchartsModule,
    SharedModule,
    ClubComponent,
    ClientRoutingRoutingModule,
    ReservationComponent,
    DashboardComponent,
  ]
})
export class ManagerModule { }
