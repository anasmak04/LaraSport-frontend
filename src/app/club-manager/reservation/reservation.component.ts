import { Component } from "@angular/core";
import { ReservationService } from "src/app/services/manager/reservation.service";
import { SharedModule } from "../../shared/shared.module";

@Component({
    selector: "app-reservation",
    standalone: true,
    templateUrl: "./reservation.component.html",
    styleUrl: "./reservation.component.css",
    imports: [SharedModule]
})
export class ReservationComponent {
  reservations: any = [];

  constructor(private reservatrion: ReservationService) {}

  ngOnInit(): void {
    this.getAllReservations(3);
  }

  getPrice(duration: string): number {
    switch (duration) {
      case "day":
        return 20.0;
      case "month":
        return 300.0;
      case "year":
        return 3000.0;
      default:
        return 0;
    }
  }

  getAllReservations(club_id: number) {
    this.reservatrion.getAllReservations(club_id).subscribe((data) => {
      this.reservations = data.reservation;
      console.log(data);
    });
  }
}
