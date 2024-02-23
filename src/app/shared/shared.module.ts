import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import {MessagesModule} from 'primeng/messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TruncatePipe } from './truncate.pipe';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AlertComponent,
    TruncatePipe,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MessagesModule,
    BrowserAnimationsModule
  ],


  exports : [AlertComponent,MessagesModule,BrowserAnimationsModule,TruncatePipe,FooterComponent,NavbarComponent]
})
export class SharedModule { }
