import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: any;

  constructor(private authservice: AuthServiceService, private router: Router) { }
 
  ngOnInit(): void {
    this.user = this.authservice.getUser();
  }



  
  logout() {
    this.authservice.logout().subscribe({
      next: () => {
        console.log("login");
        this.router.navigate(['/login']);
      },

      error : (error) => {
        console.error('logout failed', error);
      }
    });
  }

  
}
