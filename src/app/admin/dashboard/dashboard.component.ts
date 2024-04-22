import { Component, OnInit } from "@angular/core";
import Chart from "chart.js/auto";
import { ChartDataService } from "src/app/services/admin/chart/chart-data.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  blogStats: any[] = [];
  eventStats: any[] = [];
  clubStats: any[] = [];
  barChartData: any;

  constructor(private chartService: ChartDataService) {}

  ngOnInit(): void {
    this.chartService.getChartDataPosts().subscribe((data) => {
      this.blogStats = data;
      this.createChart(this.blogStats, "postCanvasId", "Blogs per Day");
    });

    this.chartService.getChartDataEvents().subscribe((data) => {
      this.eventStats = data;
      this.createChart(this.eventStats, "eventCanvasId", "Events per Day");
    });

    this.chartService.getChartDataClubs().subscribe((data) => {
      this.clubStats = data;
      this.createChart(this.clubStats, "clubCanvasId", "Clubs per Day");
    });
  }

  createChart(stats: any[], canvasId: string, label: string): void {
    const labels = stats.map((stat) => stat.date);
    const data = stats.map((stat) => stat.count);

    const chart = new Chart(canvasId, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Count",
            },
          },
        },
        responsive: true,
      },
    });
  }
}
