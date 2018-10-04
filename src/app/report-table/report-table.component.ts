import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReportTableComponent {
  @Input() zoneReports;

  public selectedRow: Number = -1;
  public selectedRecord;

  constructor() {}

  setClickedRow(x) {
    this.selectedRow = x;
    // this.selectedRecord = parseInt(this.zoneReports[x].i, 10);
    // console.log(this.zoneReports)
    console.log('selectedRow: ', this.selectedRow, typeof(this.selectedRow))
    // console.log('selectedRecord:', this.selectedRecord);
    // console.log(this.zoneReports[this.selectedRecord].n);
  }

}
