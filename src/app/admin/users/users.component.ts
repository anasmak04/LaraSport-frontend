import { Component, OnInit, inject } from '@angular/core';
import { LoaderServiceService } from 'src/app/services/loader/loader-service.service';
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

  loader = inject(LoaderServiceService);

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
