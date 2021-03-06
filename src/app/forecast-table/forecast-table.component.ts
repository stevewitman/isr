import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-forecast-table',
  templateUrl: './forecast-table.component.html',
  styleUrls: ['./forecast-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ForecastTableComponent implements OnInit {
  @Input() zoneAreas;

  ngOnInit() {
  }
}
