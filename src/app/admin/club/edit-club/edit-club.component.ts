import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubServiceService } from 'src/app/services/club/club-service.service';
import { Club } from 'src/app/shared/model/club/club';
import { ClubResponse } from 'src/app/shared/model/club/club-response';

@Component({
  selector: 'app-edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.css']
})
export class EditClubComponent implements OnInit {
  club: Club | null = null; 

  constructor(
    private clubService: ClubServiceService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  
  
}
