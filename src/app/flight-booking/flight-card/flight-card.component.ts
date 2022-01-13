import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Flight } from '../../model/flights';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges {

  @Input() item: Flight;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { }



  ngOnInit(): void {
    // Initiales Property Binding ist gerade erfolgt!
    // setTimeout(() => this.selectedChange.next(true), 0);
    
  }


  ngOnChanges(changes: SimpleChanges): void {
    // setTimeout(() => this.selectedChange.next(!this.selected), 0);
  }

  select(): void {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect(): void {
    this.selected = false;
    this.selectedChange.next(false);
  }

}
