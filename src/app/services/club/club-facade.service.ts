import { Injectable } from '@angular/core';
import { ClubServiceService } from './club-service.service';
import { CityServiceService } from '../city/city-service.service';
import { ClubTagsService } from '../club-tags/club-tags.service';

@Injectable({
  providedIn: 'root'
})
export class ClubFacadeService {

  constructor(
    private clubservice : ClubServiceService,
    private cityservice : CityServiceService,
    private ClubTagsService : ClubTagsService,
  ) { }


  findAllClubTags(){
    return this.ClubTagsService.getTags();
  }

  findAllClubs(){
    return this.clubservice.FindAllClubs();
  }

  FindAllCities(){
    return this.cityservice.findAll();
  }

  saveClub(club : any){
    return this.clubservice.save(club);
  }

}

