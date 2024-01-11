import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Olympic } from 'src/app/core/models/Olympic';
import { Participation } from 'src/app/core/models/Participation';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { countries } from 'src/app/database.test';


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
        this.olympic = resp
        this.olympic.id = resp.map((data :any) => data.id)
        this.olympic.country = resp.map((data :any) => data.country)
        this.olympic.participations = resp.map((data :any) => data.participations)
        //console.log(this.olympic)

        //id: 1, year: 2012, city: 'Londres', medalsCount: 28, athleteCount: 37
        this.participation = resp.map((obj :any) => obj.participations.map((data :any) => data))
        this.participation.id = resp.map((obj :any) => obj.participations.map((data :any) => data.id))
        this.participation.year = resp.map((obj :any) => obj.participations.map((data :any) => data.year))
        this.participation.city = resp.map((obj :any) => obj.participations.map((data :any) => data.city))
        this.participation.medalsCount = resp.map((obj :any) => obj.participations.map((data :any) => data.medalsCount))
        this.participation.athleteCount = resp.map((obj :any) => obj.participations.map((data :any) => data.athleteCount))
        //console.log(this.participation.city)
      }
    );
  }
}
