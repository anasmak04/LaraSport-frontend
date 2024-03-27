import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/Authservice/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   router = inject(Router);
   autservice = inject(AuthServiceService);

  logout(){
    localStorage.removeItem("roles");
    localStorage.removeItem("access_token");
    
    this.router.navigate(["login"]);
  }
}
