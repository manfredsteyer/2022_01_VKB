import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';



@NgModule({
  imports: [
    CommonModule, SharedModule, FormsModule //ngModel
  ],
  declarations: [
    FlightSearchComponent,
    PassengerSearchComponent,
    FlightCardComponent
  ],
  exports: [
    FlightSearchComponent,
    PassengerSearchComponent
  ]
})
export class FlightBookingModule { }
