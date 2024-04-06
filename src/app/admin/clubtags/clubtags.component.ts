import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
    private fb: FormBuilder

    ) {
    this.TagsForm = fb.group({
      name: ["", Validators.required],
    });
  }

  loader = inject(LoaderServiceService);

  ngOnInit(): void {
    this.findAllClubTas();
  }

  showModal = false;
  showModal1 = false;

  toggleModal() {
    this.showModal = !this.showModal;
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
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
