import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'form[roundTrip]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: RoundtripDirective,
    multi: true
  }]
})
export class RoundtripDirective implements Validator {

  constructor() { }

  @Input() roundTrip: string[] = [];

  validate(control: AbstractControl): ValidationErrors {
    const group = control as FormGroup;

    const from = group?.controls[this.roundTrip[0]]?.value;
    const to = group?.controls[this.roundTrip[1]]?.value;

    if (from === to) {
      return {
        roundTrip: true
      };
    }

    return {}; 

  }

}
