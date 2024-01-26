import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { Observable, Subscription, of } from 'rxjs';
import { Olympic } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';
import { ActiveElement } from 'chart.js/dist/plugins/plugin.tooltip';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss',
  '../pages.scss'
],
})

export class HomeComponent implements OnInit, OnDestroy { 
  public olympics!: Olympic[]
  olympics$!: Observable<Array<Olympic>>;
  pieChart!: Chart<'pie'>;
  mLabels: Array<string> = [];
  mMedals: Array<number> = [];
  mYears: Array<number> = [];
  mNumberOfGames: number = 0;
  subscription!: Subscription;
  data!: Subscription;
  clickedLabel!: string;

  constructor(private olympicService: OlympicService, private router: Router) {}

  ngOnInit(): void {
    this.data = this.olympicService.loadInitialData().subscribe(() => this.setInitialData());
  }

  ngOnDestroy(): void {
    this.data.unsubscribe()
    this.subscription.unsubscribe()
  }
 /**
   * Populates the empty pie chart with correct data
   *
   * @param olympics - The array of olympics retrieved by service
   */
 modifyPieChartData(olympics: Array<Olympic>): void {
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
    this.mNumberOfGames = [...new Set(this.mYears)].length
    this.createPieChart();
  }
}


createPieChart(): void {
  this.pieChart = new Chart('pieChart', {
    type: 'pie',
    data: {
      labels: this.mLabels,
      datasets: [
        {
          data: this.mMedals,
          hoverOffset: 4,
          backgroundColor: ['#956065', '#B8CBE7', '#89A1DB', '#793D52', '#9780A1'],
        },
      ],
    },
    options: {
      onClick: (event:ChartEvent, chartElements: ActiveElement[]) => {
        this.handleChartClick(chartElements);
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
  
}

handleChartClick(chartElements: Array<any>): void {
  if (chartElements && chartElements.length > 0) {
    const clickedElementIndex = chartElements[0].index;
    const clickedLabel = this.mLabels[clickedElementIndex];
    this.clickedLabel = clickedElementIndex;
    this.router.navigate(['/detail', clickedLabel]);
  }
}
  /**
   * Sets initial data
   *
   * @remarks
   * This embedding lets it do so modifyChart waits for initialData before creating new Chart
   */

    setInitialData(): void {
      this.olympics$ = this.olympicService.getOlympics();
      this.subscription = this.olympics$.subscribe((value) => {
        this.modifyPieChartData(value);
      });
    }
 

}