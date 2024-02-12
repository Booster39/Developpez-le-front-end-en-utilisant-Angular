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

  /**
 * Constructor
 * 
 * @remarks
 * Initializes a new instance of the service.
 * 
 * @param http - An instance of the HttpClient used to make the get request.
 * @param router - An instance of the Router used for navigation.
 */
  constructor(private http: HttpClient, private router: Router) {}


/**
 * Olympic data load
 * 
 * @remarks
 * Loads initial data by fetching Olympics data from the server.
 * 
 * @returns An Observable emitting the fetched Olympics data.
 */
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
  
/**
 * Retrieves country data
 * 
 *@remarks 
 * Retrieves data for the specified country from the observable list of Olympics.
 * 
 * @param countryName : The name of the country for which data is to be retrieved.
 * @returns An Observable emitting the Olympic data for the specified country
 */
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

/**
 * Retrieves the Olympics data as an observable.
 * 
 * @returns An Observable emitting the Olympics data.
 */
getOlympics():Observable<Array<Olympic>> {
  return this.olympics$.asObservable();
}

}