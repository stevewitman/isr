import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-table',
  templateUrl: './stat-table.component.html',
  styleUrls: ['./stat-table.component.css']
})
export class StatTableComponent implements OnInit {
  @Input() zoneAreas;

  constructor() { }

  ngOnInit() {
  }

}
