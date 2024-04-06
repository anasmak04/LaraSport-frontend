import { Component, OnInit, inject } from "@angular/core";
import { ClubTagsService } from "src/app/services/club-tags/club-tags.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

@Component({
  selector: "app-sport-home",
  templateUrl: "./sport-home.component.html",
  styleUrl: "./sport-home.component.css",
})
export class SportHomeComponent implements OnInit {
  

  constructor(){}
  ngOnInit(): void {
    this.getAllTags();
  }
  
  
  Tags: any = [];
  loader = inject(LoaderServiceService);
  sport = inject(ClubTagsService);



  getAllTags() {
    return this.sport.getTags().subscribe({
      next: (response) => {
        this.Tags = response.clubtag;
        console.log(this.Tags);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  
}
