import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/Authservice/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(public auth : AuthServiceService) { }



  ngOnInit(): void {}

  isMenuOpen = false;


  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
