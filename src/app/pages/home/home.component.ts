import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
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
  public olympics$: Observable<any> = of(null);
  public olympic!: Olympic
  public participation!: Participation
  myChart = countries;
  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympicService.loadInitialData().subscribe(
      resp => {
        this.olympic = {
          id: resp.map((data:any) => data.id),
          country: resp.map((data:any) => data.country),
          participations: resp.map((data:any) => data.participations),
        };
  
        this.participation = {
          id:  resp.map((obj:any) => obj.participations.map((data:any) => data.id)),
          year: resp.map((obj:any) => obj.participations.map((data:any) => data.year)),
          city: resp.map((obj:any) => obj.participations.map((data:any) => data.city)),
          medalsCount: resp.map((obj:any) => obj.participations.map((data:any) => data.medalsCount)),
          athleteCount: resp.map((obj:any) => obj.participations.map((data:any) => data.athleteCount)),
        }
        //console.log(this.olympic)
        //console.log(this.participation)
      }
    );
  }

  getTotalMedalsCount(medalsMatrix:Array<Array<number>>, id:number) {
    let total = 0;

    for (let j = 0; j < medalsMatrix[(id - 1)].length; j++) {
        total += medalsMatrix[(id - 1)][j];
    }

    return total;
  }
}
