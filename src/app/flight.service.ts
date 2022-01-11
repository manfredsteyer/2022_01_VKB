import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from './model/flights';



@Injectable()
export class DummyFlightService implements FlightService {
  find(from: string, to: string): Observable<Flight[]> {
    return of([
      { id:1, from: 'München', to: 'Berlin', date: '2022-01-11T18:00+01:00', delayed: false },
      { id:2, from: 'München', to: 'Frankfurt', date: '2022-01-11T18:00+01:00', delayed: false },
      { id:3, from: 'München', to: 'Hamburg', date: '2022-01-11T18:00+01:00', delayed: false },
      { id:4, from: 'München', to: 'Flagranti', date: '2022-01-11T18:00+01:00', delayed: false },
    ])
  }
}

@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(private http: HttpClient) { 
  }

  // private http: HttpClient;
  // constructor(http: HttpClient) { 
  //   this.http = http;
  // }


  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams()
      .set('from', from)
      .set('to', to);
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, {params, headers});
  }

}

const DEBUG = false;

@Injectable({
  providedIn: 'root',
  useClass: DefaultFlightService
  // useFactory: (http: HttpClient) => {
  //   if (DEBUG) {
  //     return new DummyFlightService();
  //   }
  //   return new DefaultFlightService(http);
  // },
  // deps: [HttpClient]
})
export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
}