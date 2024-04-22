import { Component } from "@angular/core";
import { ReservationService } from "src/app/services/manager/reservation.service";
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  styleUrl: "./reservation.component.css",
})
export class ReservationComponent {
  reservations: any = [];

  constructor(private reservatrion: ReservationService) {}

  ngOnInit(): void {
    this.getAllReservations();
  }


  calculateEndDate(startDate: Date, duration: string): Date {
    let endDate = new Date(startDate); // Create a new Date instance

    if (duration === 'day') {
      endDate.setDate(endDate.getDate() + 1); // Adds one day to the start date
    } else if (duration === 'month') {
      endDate.setMonth(endDate.getMonth() + 1); // Adds one month to the start date
      endDate.setDate(endDate.getDate() - 1); // Subtracts one day
    }

    return endDate;
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

  getAllReservations() {
    this.reservatrion.getAllReservations().subscribe({
      next : (response) => {
        this.reservations = response.reservation;
        console.log(this.reservations);
      },

      error : (error) => {
        console.log(error);
      }
    });
  }
}
