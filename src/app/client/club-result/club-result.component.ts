import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubServiceService } from 'src/app/services/club/club-service.service';

@Component({
  selector: 'app-club-result',
  templateUrl: './club-result.component.html',
  styleUrls: ['./club-result.component.css'] 
})
export class ClubResultComponent implements OnInit {
  clubs: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private clubService: ClubServiceService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const tagId = params['tags'];
      const cityId = params['city'];      
      this.searchClubs(tagId, cityId);
    });
  }

  private searchClubs(tagId: string, cityId: string): void {
    this.clubService.searchClubs(tagId, cityId).subscribe({
      next: (clubs) => {
        console.log('Clubs:', clubs);
        this.clubs = clubs; 
      },
      error: (error) => {
        console.error('Failed to fetch clubs:', error);
      }
    });
  }
}
