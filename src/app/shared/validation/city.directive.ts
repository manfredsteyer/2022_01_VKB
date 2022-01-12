import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[city]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityDirective,
      multi: true
    }
  ]
})
export class CityDirective implements Validator {

  @Input() city: string[] = [];

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {

    //if (control.value === 'Graz' || control.value === 'München') {
    if (this.city.includes(control.value)) {
      return {};
    }
    return {
      city: {
        reason: 42,
        tryAgain:2023,
        actual: control.value,
        allowed: ['Graz', 'München']
      }
    }
  }

}
