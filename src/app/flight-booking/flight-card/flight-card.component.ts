import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flight } from '../../model/flights';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {

  @Input() item: Flight;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
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
