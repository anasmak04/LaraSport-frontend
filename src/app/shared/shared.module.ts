import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import {MessagesModule} from 'primeng/messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TruncatePipe } from './pipe/truncate.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HeaderComponent } from './components/_admin/header/header.component';
import { SidebarComponent } from './components/_admin/sidebar/sidebar.component';
import { AccessDeniedComponent } from './components/permission/access-denied/access-denied.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error/error.interceptor';
import { AvatarModule } from 'primeng/avatar';


@NgModule({
  declarations: [
    AlertComponent,
    TruncatePipe,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    SidebarComponent,
    AccessDeniedComponent,
  ],
  imports: [
    CommonModule,
    MessagesModule,
    BrowserAnimationsModule,
    AvatarModule
  ],

  providers : [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true,

    },

    {
      provide : HTTP_INTERCEPTORS,
      useClass : ErrorInterceptor,
      multi : true,

    }
  ],
  exports: [
    AlertComponent,
    MessagesModule,
    BrowserAnimationsModule,
    TruncatePipe,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
