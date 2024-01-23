import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { Observable, Subscription, of } from 'rxjs';
import { Olympic } from 'src/app/core/models/Olympic';
import { Participation } from 'src/app/core/models/Participation';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss',
  '../pages.scss']
})
export class DetailComponent implements OnInit {
  public olympic!: Olympic
  public participation!: Participation
  olympics$!: Observable<Array<Olympic>>;
  lineChart!: any;
  entriesCountry: number = 0;
  medalsCountry: Array<number> = [];
  medalsCountryCount: number = 0;
  athletesCountry: Array<any> = [];
  athletesCountryCount: number = 0;
  mYears: Array<any> = [];
  gamesCountry: number = 0;
  subscription!: Subscription;
  data!: Subscription;

  constructor(private olympicService: OlympicService, private router: Router) {}

  ngOnInit(): void {
    this.data = this.olympicService.loadInitialData().subscribe(() => this.setInitialData());
  }
 /**
   * Populates the empty pie chart with correct data
   *
   * @param olympics - The array of olympics retrieved by service
   */
 modifylineChartData(olympics: Array<Olympic>, selectedCountry:string): void {
  if (olympics) {
    for (let olympic of olympics) {
      if (olympic.country === selectedCountry) {
        this.entriesCountry = olympic.participations.length;
        if (olympic.participations) {
          for (let participation of olympic.participations) {
            this.medalsCountry.push(participation.medalsCount);
            this.athletesCountry.push(participation.athleteCount);
            this.mYears.push(participation.year);
          }
        }
      }

    this.createLineChart();
  }
  this.gamesCountry = this.mYears.length
  this.medalsCountryCount = this.medalsCountry.reduce((acc, value)=>acc + value,0)
  this.athletesCountryCount = this.athletesCountry.reduce((acc, value)=>acc + value,0)
}
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
        this.modifylineChartData(value, 'France');
      });
    }
    destroyChart() {
      const existingChart = Chart.getChart("lineChart");
      
        if (existingChart) {
          existingChart.destroy();
        }
      }

    createLineChart(): void {
      this.destroyChart()
      this.lineChart = new Chart('lineChart', {
        type: 'line',
        data: {
          labels: this.mYears,
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
}
  //src="https://cdn.jsdelivr.net/npm/chart.js"
  
 
