import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor() {}

  public showSuccess(title: string, message: string): void {
    this.showNotification(title, message, "success");
  }

  public showError(title: string, message: string): void {
    this.showNotification(title, message, "error");
  }

  private showNotification(
    title: string,
    message: string,
    type: "success" | "error"
  ): void {
    Swal.fire({
      title: title,
      text: message,
      icon: type,
      confirmButtonText: "OK",
    });
  }
}
