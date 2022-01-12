import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { FlightService } from '../../flight.service';
import { delay, map } from 'rxjs/operators';

@Directive({
  selector: 'input[asyncCity]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: AsyncCityDirective,
    multi: true
  }]
})
export class AsyncCityDirective implements AsyncValidator {

  constructor(private fightService: FlightService) { }

  validate(control: AbstractControl): Observable<ValidationErrors> {

    // Schöner: .exists(...)
    return this.fightService.find(control.value, '').pipe(
      delay(7000),
      map(flights => {
        if (flights.length > 0 ) {
          return {};
        }
        return {
          asyncCity: true
        }
    }));

  }

}
