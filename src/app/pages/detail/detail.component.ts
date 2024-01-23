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
  mLabels: Array<string> = [];
  mMedals: Array<number> = [];
  mYears: Array<any> = [];
  mNumberOfGames: number = 0;
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
 modifyChartData(olympics: Array<Olympic>): void {
  if (olympics) {
    for (let olympic of olympics) {
      this.mLabels.push(olympic.country);
      this.mMedals.push(this.olympicService.countMedals(olympic));
      if (olympic.participations) {
        for (let participation of olympic.participations) {
          this.mYears.push(participation.year);
        }
      }
    }
    this.mYears = [...new Set(this.mYears)]
    this.mNumberOfGames = this.mYears.length
    this.createChart();
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
        this.modifyChartData(value);
      });
    }
 
    createChart(): void {
      this.lineChart = new Chart('myChart', {
        type: 'line',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
  
 
