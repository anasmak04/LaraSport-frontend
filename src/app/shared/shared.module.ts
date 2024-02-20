import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import {MessagesModule} from 'primeng/messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    MessagesModule,
    BrowserAnimationsModule
  ],


  exports : [AlertComponent,MessagesModule,BrowserAnimationsModule]
})
export class SharedModule { }
