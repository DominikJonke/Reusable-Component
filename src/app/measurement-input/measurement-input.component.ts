import { Component, OnInit, Input } from '@angular/core';

import { Measurement } from '../class/measurement-class';

@Component({
  selector: 'app-measurement-input',
  templateUrl: './measurement-input.component.html',
  styleUrls: ['./measurement-input.component.css']
})
export class MeasurementInputComponent implements OnInit {
  
  @Input() items: Measurement[];
  @Input() units = ['°C', '%', 'ppm'];


  //@Output() itemsChange = new EventEmitter<Measurement>();
  //@Output() unitChange = new EventEmitter<Measurement>();
  
  constructor() { }

  ngOnInit(): void {
  }

  //onValueChanged(): void{
  //  this.valueChange.emit(this.items);
  //}

  //onUnitChanged(): void{
  //  this.unitChange.emit(this.units);
  //}

}
