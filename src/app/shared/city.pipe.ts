import { Pipe, PipeTransform } from '@angular/core';
import { FlightService } from '../flight.service';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(city: string, fmt: string): string {

    console.debug('transform');

    let short, long;

    switch(city) {
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Helmut Schmidt';
        break;
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz-Thalerhof';
        break;
      default:
        short = long = city;
    }

    if (fmt === 'short') {
      return short;
    }
    else {
      return long;
    }

  }

}
