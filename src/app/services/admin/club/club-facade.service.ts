import { Injectable } from '@angular/core';
import { ClubServiceService } from './club-service.service';
import { CityServiceService } from '../city/city-service.service';
import { ClubTagsService } from '../club-tags/club-tags.service';
import { ManagerService } from '../../manager/manager.service';
import { HttpHeaders } from '@angular/common/http';
import { Club } from 'src/app/shared/model/club/club';

@Injectable({
  providedIn: 'root'
})
export class ClubFacadeService {

  constructor(
    private clubservice : ClubServiceService,
    private cityservice : CityServiceService,
    private ClubTagsService : ClubTagsService,
    private managerservice : ManagerService,
  ) { }


  


  findAllManagers(){
    return this.managerservice.FindAllManagers();
  }


  findAllClubTags(){
    return this.ClubTagsService.getTags();
  }

  findAllClubs(){
    return this.clubservice.FindAllClubs();
  }

  FindAllCities(){
    return this.cityservice.findAll();
  }

  saveClub(formdata: FormData){
    return this.clubservice.save(formdata);
  }

  FindClubByid(id : number){
    return this.clubservice.getClubById(id);
  }

  updateclub(id : number , club : Club){
    return this.clubservice.update(id,club);
  }


  
}

