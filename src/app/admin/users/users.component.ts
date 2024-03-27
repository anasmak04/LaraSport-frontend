import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users :any = [];
  constructor(private userservice : UsersService){

  }

  ngOnInit(): void {  
    this.findAll();
  }


  findAll(){
    this.userservice.findAllUsers().subscribe({
      next : (response) => {          
        this.users = response.user
        console.log(this.users)
      },

      error : (err) => console.log(err)
    })
  }

}
