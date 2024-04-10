import { AfterViewInit, Component, OnInit, inject } from "@angular/core";
import Chart from "chart.js/auto";
import { ChartDataService } from "src/app/services/chart/chart-data.service";
import { LoaderServiceService } from "src/app/services/loader/loader-service.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor(private chartservice: ChartDataService) {}

  loader = inject(LoaderServiceService);

  ngOnInit(): void {
    this.chartservice.getChartDataPosts().subscribe((count) => {
      this.createChart(count);
    });
  }

  createChart(data: any): void {
    const months = data.map((item: any) => `${item.month}-${item.year}`);
    const counts = data.map((item: any) => item.count);

    const ctx = document.getElementById("myChart") as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: months,
        datasets: [
          {
            label: "# of Blogs",
            data: counts,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
