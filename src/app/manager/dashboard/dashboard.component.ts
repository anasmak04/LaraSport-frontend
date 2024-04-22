import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import Chart from "chart.js/auto";
import { ChartDataService } from "src/app/services/admin/chart/chart-data.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild("priceChart")
  priceChart!: ElementRef<HTMLCanvasElement>;
  private chart: Chart | undefined;

  constructor(private chartService: ChartDataService) {}

  ngAfterViewInit(): void {
    this.chartService.getMostReservedBYMonths().subscribe((data) => {
      this.createChart(data);
      console.log(data);
    });
  }

  createChart(data: any[]): void {
    const labels = data.map((d) => {
      const date = new Date(d.created_at);
      return date.getMonth() + 1;
    });
    const prices = data.map((d) => parseFloat(d.total_price));
    this.chart = new Chart(this.priceChart.nativeElement, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Total Price per Month",
            data: prices,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Total Sum Price",
            },
          },
          x: {
            title: {
              display: true,
              text: "Month",
            },
          },
        },
        responsive: true,
      },
    });
  }
}
