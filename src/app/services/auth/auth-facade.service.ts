import { Injectable } from "@angular/core";
import { AuthServiceService } from "./auth-service.service";
import { CityServiceService } from "../city/city-service.service";

@Injectable({
  providedIn: "root",
})
export class AuthFacadeService {
  constructor(
    private authservice: AuthServiceService,
    private cityservice: CityServiceService
  ) {}

 

  register(user: any) {
    return this.authservice.register(user);
  }

  getCities() {
    return this.cityservice.findAll();
  }
}
