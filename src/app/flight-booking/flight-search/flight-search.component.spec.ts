import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DummyFlightService, FlightService } from '../../flight.service';
import { SharedModule } from '../../shared/shared.module';
import { FlightBookingModule } from '../flight-booking.module';
import { FlightCardComponent } from '../flight-card/flight-card.component';

import { FlightSearchComponent } from './flight-search.component';

fdescribe('FlightSearchComponent', () => {
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // imports: [HttpClientModule, FormsModule, SharedModule],
      // declarations: [ FlightSearchComponent, FlightCardComponent ]
      imports: [HttpClientModule, FlightBookingModule],
      providers: [{ provide: FlightService, useClass: DummyFlightService }]
    }) 
    .compileComponents();
  });
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not have a selectedFlight initially', () => {
    
    expect(component.selectedFlight).toBeUndefined();

  });


  it('should load flights when criteria given', () => {
    component.from = 'Hamburg';
    component.to = 'Graz';
    component.search();
    expect(component.flights.length).toBe(4);
  });

  it('should not load flights when no criteria given', () => {
    component.search();
    expect(component.flights.length).toBe(0);
  });


});
