import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DummyFlightService, FlightService } from '../../flight.service';
import { Flight } from '../../model/flights';


@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  // providers: [{provide: FlightService, useClass: DummyFlightService}]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Flight[] = [];
  selectedFlight: Flight;

  basket = {
    "3": true,
    "5": true
  };

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  search(): void {
    
    this
    .flightService
    .find(this.from, this.to)
    .subscribe({
      next: flights => {
        this.flights = flights;
      },
      error: err => {
        console.error('err', err);
      }
    })
  
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
