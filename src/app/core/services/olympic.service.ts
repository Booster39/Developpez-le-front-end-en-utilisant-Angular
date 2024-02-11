import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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
        this.olympics$.error('error');
        this.router.navigateByUrl('error');
        return caught;
      })
    );
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
  
  getDataForCountry(countryName: string): Observable<Olympic | undefined> {
    return this.olympics$.asObservable().pipe(
      map(olympics => {
        if (Array.isArray(olympics)) {
          return olympics.find((country: Olympic) => country.country === countryName);
        }
        return undefined;
      })
    );
}

getOlympics():Observable<Array<Olympic>> {
  return this.olympics$.asObservable();
}

}