import { Component, OnInit, inject } from "@angular/core";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";
import { UsersService } from "src/app/services/users/users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  users: any = [];
  Search: any = [];
  searchTerm: String = "";
  selectedItemId: number | null = null;
  selectedRoleId: number | null = null;

  constructor(private userservice: UsersService) {}

  loader = inject(LoaderServiceService);

  ngOnInit(): void {
    this.findAll();
  }


  



  findAll() {
    this.userservice.findAllUsers().subscribe({
      next: (response) => {
        this.users = response.user;
        console.log(this.users);
      },
      error: (err) => console.log(err),
    });
  }

  toggleModal(itemId: number | null): void {
    this.selectedItemId = itemId;
    if (itemId !== null) this.selectedRoleId = null;
  }

  attachRole(userId: number, roleId: number) {
    if (!userId || !roleId) {
      console.error("User ID or Role ID is missing");
      return;
    }

    this.userservice.updateRole(userId, roleId).subscribe({
      next: (response) => {
        console.log("Role attached successfully:", response);
      },
      error: (err) => {
        console.error("Error attaching role:", err);
      },
    });
  }

  search(searchTerm: String) {
    return this.userservice.search(searchTerm).subscribe({
      next: (response) => {
        this.Search = response.user;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
