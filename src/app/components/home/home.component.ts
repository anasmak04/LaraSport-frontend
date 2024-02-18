import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/Authservice/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




  constructor(private authservie : AuthServiceService, private router : Router){}



 

  ngOnInit(): void {
    }


  logout(){
    this.authservie.logout();
    this.router.navigate(["/login"]);
  }


}
