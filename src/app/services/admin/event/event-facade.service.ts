import { Injectable } from "@angular/core";
import { EventServiceService } from "./event-service.service";
import { ClubTagsService } from "../club-tags/club-tags.service";
import { CityServiceService } from "../city/city-service.service";
import { SportTypeService } from "../sport-type/sport-type.service";
import { Event } from "src/app/shared/model/event/event";

@Injectable({
  providedIn: "root",
})
export class EventFacadeService {
  constructor(
    private eventservice: EventServiceService,
    private clubtag: ClubTagsService,
    private cityservice: CityServiceService,
    private sporttypeservice: SportTypeService
  ) {}

  update(id: number, event: Event) {
    return this.eventservice.update(id, event);
  }

  findallcities() {
    return this.cityservice.findAll();
  }

  findAllClubTags() {
    return this.clubtag.getTags();
  }

  findallsportTypes() {
    return this.sporttypeservice.FindAll();
  }

  addEvent(event: any) {
    return this.eventservice.save(event);
  }

  findEventById(id: number) {
    return this.eventservice.findById(id);
  }

  eventbycity(cityId: number) {
    return this.eventservice.getEventsByCity(cityId);
  }
}
