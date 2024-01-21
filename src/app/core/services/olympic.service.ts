import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Olympic } from '../models/Olympic';
import { Participation } from '../models/Participation';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<any>(undefined);

  olympic: Olympic | undefined;
  participation: Participation | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  loadInitialData() {
    return this.http.get<Array<Olympic>>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError((error, caught) => {
        console.error(error);
        this.olympics$.next(null);
        this.router.navigateByUrl('error');
        return caught;
      })
    );
  }
  showOlympic() {
    this.getOlympics().subscribe(
      resp => {
        this.olympic = resp
      }
    )
  }
/**
 * Returns the total number of medals for a chosen country
 *
 * @param olympic - The chosen country
 * @returns The addition of all numbers of medals for that country
 */

countMedals(olympic: Olympic): number {
  let medals: number = 0;
  
  for (let participation of olympic.participations) {
    medals += participation.medalsCount;
  }
  return medals
  }
  


  getOlympics() {
    return this.olympics$.asObservable();
  }
  fromArrayToObject(data:Array<any>){
    const transformedData = data.reduce((acc, countryData) => {
      const { country, participations, ...rest } = countryData;
      const countryWithoutParticipations = { ...rest };
      acc[country] = countryWithoutParticipations;
      return acc;
    }, {});
    
    console.log(transformedData);
    return transformedData;
  }
  createFormattedHomeData(data:Array<any>) { 
    const newData = data.map((countryData:any) => {
      const { id, country, participations } = countryData;
      console.log(participations)
      const totalMedals = participations.reduce((acc:number, participation:Array<any>) => {
        return acc + participation.reduce((medalsContainer, yearData) => medalsContainer + yearData.medalsCount, 0);
      }, 0);
      return {
        id,
        country,
        medals: totalMedals
      };
    });

    console.log(newData);
    return newData;
  }

  navigateToDetailPage() {
    this.router.navigate(['/detail'])
  }

}