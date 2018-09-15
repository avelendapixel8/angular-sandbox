import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'weather-station',
  templateUrl: './weather-station.component.html',
  styleUrls: ['./weather-station.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherStationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
