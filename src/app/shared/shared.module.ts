import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CityPipe } from './city.pipe';
import { CityDirective } from './validation/city.directive';
import { RoundtripDirective } from './validation/roundtrip.directive';
import { AsyncCityDirective } from './validation/async-city.directive';

@NgModule({
    imports: [
        CommonModule
    ], //*ngFor, *ngIf, | date
    declarations: [
        CityPipe, 
        CityDirective, RoundtripDirective, AsyncCityDirective
    ],
    providers: [],
    exports: [
        CityPipe,
        CityDirective,
        RoundtripDirective,
        AsyncCityDirective
    ],
})
export class SharedModule { }
