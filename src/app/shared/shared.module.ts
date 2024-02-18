import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import {MessagesModule} from 'primeng/messages';


@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    MessagesModule
  ],


  exports : [AlertComponent,MessagesModule]
})
export class SharedModule { }
