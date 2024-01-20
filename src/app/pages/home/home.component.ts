import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { Observable, Subscription, of } from 'rxjs';
import { Olympic } from 'src/app/core/models/Olympic';
import { Participation } from 'src/app/core/models/Participation';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { countries, olympic, participation } from 'src/app/database.test';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public olympic!: Olympic
  public participation!: Participation
  olympics$!: Observable<Array<Olympic>>;
  pieChart!: any;
  mLabels: Array<string> = [];
  mMedals: Array<number> = [];
  mNumberOfGames: number = 0;
  subscription!: Subscription;
  data!: Subscription;
  //myChart = this.olympicService.fromArrayToObject(this.olympicService.createFormattedHomeData(data));

  constructor(private olympicService: OlympicService, private router: Router) {}

  ngOnInit(): void {
    this.data = this.olympicService.loadInitialData().subscribe(() => this.setInitialData());
  }
 /**
   * Populates the empty pie chart with correct data
   *
   * @param olympics - The array of olympics retrieved by service
   */
 modifyChartData(olympics: Array<Olympic>): void {
  if (olympics) {
    for (let olympic of olympics) {
      this.mLabels.push(olympic.country);
      this.mMedals.push(this.olympicService.countMedals(olympic));
    }

    this.createChart();
  }
}


createChart(): void {
  this.pieChart = new Chart('MyChart', {
    type: 'pie',
    data: {
      labels: this.mLabels,
      datasets: [
        {
          data: this.mMedals,
          hoverOffset: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        }
      },
    },
  });
  
}

    /**
   * Sets initial data
   *
   * @remarks
   * This embedding lets it do so modifyChart waits for initialData before creating new Chart
   */

    setInitialData() {
      this.olympics$ = this.olympicService.getOlympics();
      this.subscription = this.olympics$.subscribe((value) => {
        this.modifyChartData(value);
      });
    }
 
}