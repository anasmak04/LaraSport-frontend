import { Component } from '@angular/core';
import { ClubmanagerService } from 'src/app/services/manager/clubmanager.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent {
  clubs : any = [];
  
  constructor(private managerservice : ClubmanagerService) { }

  ngOnInit(): void {
    this.findclub();
  }

  findclub(){
    return this.managerservice.FindClubByManager().subscribe({
      next : (response) => {
        this.clubs = response.club;
        console.log(this.clubs);
      },
      error : (error) => {
        console.log(error);
      }
    });
  }


}
