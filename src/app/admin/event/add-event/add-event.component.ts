import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EventFacadeService } from "src/app/services/event/event-facade.service";

@Component({
  selector: "app-add-event",
  templateUrl: "./add-event.component.html",
  styleUrls: ["./add-event.component.css"],
})
export class AddEventComponent implements OnInit {
  cities: any[] = [];
  TagsClubs: any[] = [];
  sporttypes: any[] = [];

  FormEvent: FormGroup;

  constructor(
    private FacadeEvent: EventFacadeService,
    private fb: FormBuilder
  ) {
    this.FormEvent = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      content: ["", Validators.required],
      event_date: ["", Validators.required],
      sport_type_id: ["", Validators.required],
      city_id: ["", Validators.required],
      TagsClubs: [""],
    });
  }

  ngOnInit() {
    this.findallcities();
    this.findAllClubTags();
    this.findallsportTypes();
  }

  add() {
    if (this.FormEvent.valid) {
      const token = localStorage.getItem("access_token");
      console.log("token", token);
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      console.log(this.FormEvent.value);
      const formData = new FormData();
      formData.append("title", this.FormEvent.get("title")?.value);
      formData.append("description", this.FormEvent.get("description")?.value);
      formData.append("content", this.FormEvent.get("content")?.value);
      formData.append("event_date", this.FormEvent.get("event_date")?.value);
      formData.append(
        "sport_type_id",
        this.FormEvent.get("sport_type_id")?.value
      );
      formData.append("city_id", this.FormEvent.get("city_id")?.value);

      const fileInput = document.querySelector('input[type="file"]');
      if (
        fileInput instanceof HTMLInputElement &&
        fileInput.files &&
        fileInput.files[0]
      ) {
        formData.append("image", fileInput.files[0]);
      } else {
        console.warn("No image selected or input element not found.");
      }

      const tags = this.FormEvent.get("TagsClubs")?.value;
      if (Array.isArray(tags)) {
        tags.forEach((tag) => {
          formData.append("TagsClubs[]", tag);
        });
      } else {
        console.warn("Tags are not in an array format.");
      }

      this.FacadeEvent.addEvent(formData).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (err) => console.log(err),
      });
    }
  }

  findallcities() {
    this.FacadeEvent.findallcities().subscribe({
      next: (response) => {
        this.cities = response.city;
      },

      error: (err) => console.log(err),
    });
  }

  findallsportTypes() {
    this.FacadeEvent.findallsportTypes().subscribe({
      next: (response) => {
        this.sporttypes = response.sport_type;
      },

      error: (err) => console.log(err),
    });
  }

  findAllClubTags() {
    this.FacadeEvent.findAllClubTags().subscribe({
      next: (response) => {
        this.TagsClubs = response.clubtag;
      },
      error: (err) => console.log(err),
    });
  }
}
