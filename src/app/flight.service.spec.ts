import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FlightService } from './flight.service';

fdescribe('FlightService', () => {
  let service: FlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FlightService);
  });

  it('should call backend', () => {

    // Backend testen ?!
    service.find('Hamburg', 'Graz').subscribe(flights => {
      expect(flights.length).toBe(2);
    })

    const controller = TestBed.inject(HttpTestingController);
    const req = controller.expectOne('http://www.angular.at/api/flight?from=Hamburg&to=Graz');
    // const req = controller.match(req => req.url.startsWith('http://www.angular.at/api/flight') && req.method === 'GET')[0];
    
    req.flush([
      {id: 7, from: 'München', to: 'Berlin', date: '2022-12-24T17:00+01:00', delayed: true}, 
      {id: 8, from: 'München', to: 'Flagranti', date: '2022-12-24T17:00+01:00', delayed: true}, 
    ]);

  });
});
