import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CityPipe } from './city.pipe';

@NgModule({
    imports: [CommonModule], //*ngFor, *ngIf, | date
    declarations: [CityPipe],
    providers: [],
    exports: [CityPipe],
})
export class SharedModule { }
