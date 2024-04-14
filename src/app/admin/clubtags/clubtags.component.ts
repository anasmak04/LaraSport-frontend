import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/services/alert/alert.service";
import { ClubTagsService } from "src/app/services/club-tags/club-tags.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

@Component({
  selector: "app-clubtags",
  templateUrl: "./clubtags.component.html",
  styleUrl: "./clubtags.component.css",
})
export class ClubtagsComponent implements OnInit {
  clubtags: any = [];
  TagsForm: FormGroup;

  selectedTagId: number | null = null;

  toggleEdit(id: number) {
    if (this.selectedTagId === id) {
      this.selectedTagId = null;
    } else {
      this.selectedTagId = id;
    }
  }

  isModalShown(id: number): boolean {
    return this.selectedTagId === id;
  }

  constructor(
    private clubtagsservice: ClubTagsService,
    private fb: FormBuilder,
    private sweet : AlertService
  ) {
    this.TagsForm = fb.group({
      name: ["", Validators.required],
      image: ["", Validators.required],
    });
  }

  loader = inject(LoaderServiceService);

  ngOnInit(): void {
    this.findAllClubTas();
  }

  showModal = false;
  showModal1 = false;

  save() {
    if (this.TagsForm.valid) {
      const formData = new FormData();
      formData.append("name", this.TagsForm.get("name")?.value);
      const fileInput: HTMLInputElement =
        document.querySelector('input[type="file"]')!;
      if (fileInput && fileInput.files && fileInput.files[0]) {
        formData.append("image", fileInput.files[0]);
      }

      this.clubtagsservice.save(formData).subscribe({
        next: () => {
          this.TagsForm.reset();
          this.sweet.showSuccess("clubtag inserted", "clubtag inserted successfully");
          this.findAllClubTas();
        },
        error: (error) => {
          console.log(error);
          this.sweet.showError("clubtag failed to insert ", "clubtag failed to inserted")
        },
      });
    }
  }


  toggleModal() {
    this.showModal = !this.showModal;
  }


  delete(id : number){
    this.clubtagsservice.delete(id).subscribe({
      next: () => {
        this.findAllClubTas();
        this.sweet.showSuccess("Tag Deleted", "Tag Deleted Successfully");
      },
      error: (error) => {
        console.log(error);
        this.sweet.showError("Error", "Error Deleting Tag");
      },
    });
  }

  findAllClubTas() {
    this.clubtagsservice.getTags().subscribe({
      next: (response) => {
        this.clubtags = response.clubtag;
        console.log(this.clubtags);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

 
}
