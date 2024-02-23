import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import {MessagesModule} from 'primeng/messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TruncatePipe } from './truncate.pipe';


@NgModule({
  declarations: [
    AlertComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    MessagesModule,
    BrowserAnimationsModule
  ],


  exports : [AlertComponent,MessagesModule,BrowserAnimationsModule,TruncatePipe]
})
export class SharedModule { }
