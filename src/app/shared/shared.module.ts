import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import {MessagesModule} from 'primeng/messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TruncatePipe } from './pipe/truncate.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';


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
