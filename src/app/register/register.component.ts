import {Component, OnInit} from '@angular/core';
import {SharedService} from "../shared/shared.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  cities :any[] = [];

  constructor(private data : SharedService) {}

  ngOnInit() {
   this.getCities();
  }


  getCities(){
    return this.data.getData().subscribe((data) => {
        this.cities = data;
    });
  }


}
