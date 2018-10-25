import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReportTableComponent {
  @Input() zoneAreas;

  public selectedRow: Number = -1;
  public selectedRecord;

  constructor() {}

  setClickedRow(x) {
    this.selectedRow = x;
    console.log('selectedRow: ', this.selectedRow, typeof(this.selectedRow))
  }

}
