import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReportTableComponent implements OnInit {
  myStyles1 = {
    'background': 'linear-gradient(to top, #FFF 0%, #FFF 10%, #E3F2FD 10%, #E3F2FD 100%)'
  };
  myStyles2 = {
    'background': 'linear-gradient(to top, #FFF 0%, #FFF 20%, #E3F2FD 20%, #E3F2FD 100%)'
  };
  myStyles3 = {
    'background': 'linear-gradient(to top, #FFF 0%, #FFF 30%, #E3F2FD 30%, #E3F2FD 100%)'
  };
  myStyles7 = {
    'background': 'linear-gradient(to top, #FFF 0%, #FFF 70%, #E3F2FD 70%, #E3F2FD 100%)'
  };
  myStyles10 = {
    'background': 'linear-gradient(to top, #FFF 0%, #FFF 100%)'
  };

  constructor() { }

  ngOnInit() {
  }
}
