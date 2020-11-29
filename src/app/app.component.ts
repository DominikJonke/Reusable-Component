import { Component, OnInit } from '@angular/core';

import { Measurement } from './class/measurement-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reusable-components';
  items: Measurement[];

  ngOnInit(): void {
    this.items = [
      {name: 'Office Temperature', value: 24, unit: '°C'},
      {name: 'Office Humidity', value: 55.6, unit: '%'},
      {name: 'Co2', value: 666, unit: 'ppm'}
    ]
  }

  /*
  appValue = 1234;
  appUnit = "%";

  value1 = 15;
  value2 = 93;
  value3 = 55.7;

  unit1 = '';
  unit2 = 'xxx';
  unit3 = 'ppm';
  */
}
