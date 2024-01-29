import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Chart } from 'chart.js';
import { Subscription} from 'rxjs';
import { Olympic } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit, OnDestroy {
  public olympics!: Olympic[]
  lineChart!: Chart<'line'>;
  entriesCountry: number = 0;
  medalsCountryCount: number = 0;
  athletesCountryCount: number = 0;
  data!: Subscription;
  countryName!: string;

  constructor(private olympicService: OlympicService, private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      this.countryName = params['clickedLabel'];
    });
  }

  ngOnInit(): void {
    this.data = this.olympicService.getDataForCountry(this.countryName).subscribe(data => {
      if (data) {
        this.olympics = [data];
        this.modifyLineChartData(this.olympics)
      }
    });
  }

  ngOnDestroy(): void {
    this.data.unsubscribe()
  }
 /**
   * Populates the empty pie chart with correct data
   *
   * @param olympics - The array of olympics retrieved by service
   */
  modifyLineChartData(olympics: Array<Olympic>): void {
    if (olympics && olympics.length > 0) {
      const countryData = olympics[0];
      this.entriesCountry = countryData.participations.length;
      this.medalsCountryCount = countryData.participations.reduce((sum, participation) => sum + participation.medalsCount, 0);
      this.athletesCountryCount = countryData.participations.reduce((sum, participation) => sum + participation.athleteCount, 0);
    }
    this.createLineChart();
  }

  createLineChart(): void {
    const labels = this.olympics[0].participations.map(participation => participation.year);
    const data = this.olympics[0].participations.map(participation => participation.medalsCount);

    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Nombre de médailles',
          data,
          borderWidth: 2,
          borderColor: '#B8CBE7',
          backgroundColor: '#89A1DB',
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          
        },
      }
    });
  }

}
  
 
