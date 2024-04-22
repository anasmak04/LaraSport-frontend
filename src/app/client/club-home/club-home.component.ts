import { Component, OnInit, inject } from "@angular/core";
import { ClubclientService } from "src/app/services/client/club/clubclient.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

@Component({
  selector: "app-club-home",
  templateUrl: "./club-home.component.html",
  styleUrl: "./club-home.component.css",
})
export class ClubHomeComponent implements OnInit {
  clubs: any = [];
  clubssearch: any[] = [];
  mostreserved: any[] = [];
  searchTerm: String = "";


  public loader = inject(LoaderServiceService);
   
  constructor(private cluservice: ClubclientService) {}

  ngOnInit(): void {
    this.FindAllClubs();
    this.MostReserved();
  }

  MostReserved() {
    this.cluservice.TheMostClubReserved().subscribe({
      next: (response) => {
        this.mostreserved = response.clubs;
        console.log(this.mostreserved);
      },
      error: (err) => console.log(err),
    });
  }

  FindAllClubs() {
    this.cluservice.FindAllClubs().subscribe({
      next: (response) => {
        this.clubs = response.clubs;
        console.log(this.clubs);
      },
      error: (err) => console.log(err),
    });
  }

  search(searchTerm: String) {
    this.cluservice.search(searchTerm).subscribe({
      next: (response) => {
        this.clubssearch = response.search;
        console.log(this.clubssearch);
      },
      error: (err) => console.log(err),
    });
  }


}
