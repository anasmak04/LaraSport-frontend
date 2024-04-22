import { Component, OnInit, inject } from "@angular/core";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";
import { UsersService } from "src/app/services/admin/users/users.service";

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

  banUser(userId: number): void {
    this.userservice.banUser(userId).subscribe({
      next: (response) => {
        console.log("User Banned", response);
        this.updateUserStatus(userId, true);
        // Update user's status in the local array
      },
      error: (err) => {
        console.error("Error banning user", err);
      },
    });
  }

  unbanUser(userId: number): void {
    this.userservice.unbanUser(userId).subscribe({
      next: (response) => {
        console.log("User Unbanned", response);
        this.updateUserStatus(userId, false); // Update user's status in the local array
      },
      error: (err) => {
        console.error("Error unbanning user", err);
      },
    });
  }

  private updateUserStatus(userId: number, isBanned: boolean): void {
    const user = this.users.find((u: { id: number }) => u.id === userId);
    if (user) {
      user.is_banned = isBanned;
    }
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
        console.log(this.Search);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


}
