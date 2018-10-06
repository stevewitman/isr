import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

import { Area } from './../area.model';
import { Report } from './../report.model';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {
  zone = 0;
  reports: Report[] = [];
  combined = [];
  zoneWest = [];
  zoneRockies = [];
  zoneEast = [];
  zoneCanada = [];

  areas: Area[] = [
    { i: 0, n: 'Alpine Meadows', s: 'CA', z: 0, l: 'https://squawalpine.com'},
    { i: 1, n: 'Bear Mountain', s: 'CA', z: 0, l: 'https://www.bigbearmountainresort.com'},
    { i: 2, n: 'June Mountain', s: 'CA', z: 0, l: 'https://www.junemountain.com'},
    { i: 3, n: 'Mammoth', s: 'CA', z: 0, l: 'https://www.mammothmountain.com'},
    { i: 4, n: 'Snow Summit', s: 'CA', z: 0, l: 'https://www.bigbearmountainresort.com'},
    { i: 5, n: 'Squaw Valley', s: 'CA', z: 0, l: 'https://squawalpine.com'},
    { i: 6, n: 'Crystal Mountain', s: 'WA', z: 0, l: 'https://www.crystalmountainresort.com'},
    { i: 7, n: 'The Summit', s: 'WA', z: 0, l: 'http://www.summitatsnoqualmie.com'},
    { i: 8, n: 'Aspen Highlands', s: 'CO', z: 1, l: 'https://www.aspensnowmass.com'},
    { i: 9, n: 'Aspen Mountain', s: 'CO', z: 1, l: 'https://www.aspensnowmass.com'},
    { i: 10, n: 'Buttermilk', s: 'CO', z: 1, l: 'https://www.aspensnowmass.com'},
    { i: 11, n: 'Copper Mountain', s: 'CO', z: 1, l: 'https://www.coppercolorado.com'},
    { i: 12, n: 'Eldora', s: 'CO', z: 1, l: 'https://www.eldora.com'},
    { i: 13, n: 'Snowmass', s: 'CO', z: 1, l: 'https://www.aspensnowmass.com'},
    { i: 14, n: 'Steamboat', s: 'CO', z: 1, l: 'https://steamboat.com'},
    { i: 15, n: 'Winter Park Resort', s: 'CO', z: 1, l: 'https://www.winterparkresort.com'},
    { i: 16, n: 'Big Sky Resort', s: 'MT', z: 1, l: 'https://bigskyresort.com'},
    { i: 17, n: 'Taos', s: 'NM', z: 1, l: 'https://www.taosskivalley.com'},
    { i: 18, n: 'Alta', s: 'UT', z: 1, l: 'https://www.alta.com'},
    { i: 19, n: 'Brighton', s: 'UT', z: 1, l: 'http://www.brightonresort.com'},
    { i: 20, n: 'Deer Valley', s: 'UT', z: 1, l: 'http://www.deervalley.com'},
    { i: 21, n: 'Snowbird', s: 'UT', z: 1, l: 'https://www.snowbird.com'},
    { i: 22, n: 'Solitude', s: 'UT', z: 1, l: 'https://solitudemountain.com'},
    { i: 23, n: 'Jackson Hole', s: 'WY', z: 1, l: 'https://www.jacksonhole.com'},
    { i: 24, n: 'Sugarloaf', s: 'ME', z: 2, l: 'https://www.sugarloaf.com'},
    { i: 25, n: 'Sunday River ', s: 'ME', z: 2, l: 'https://www.sundayriver.com'},
    { i: 26, n: 'Boyne Highlands', s: 'MI', z: 2, l: 'https://www.boynehighlands.com'},
    { i: 27, n: 'Boyne Mountain', s: 'MI', z: 2, l: 'https://www.boynemountain.com'},
    { i: 28, n: 'Loon Mountain', s: 'NH', z: 2, l: 'http://www.loonmtn.com'},
    { i: 29, n: 'Killington', s: 'VT', z: 2, l: 'https://www.killington.com'},
    { i: 30, n: 'Straton', s: 'VT', z: 2, l: 'https://www.stratton.com'},
    { i: 31, n: 'Sugarbush', s: 'VT', z: 2, l: 'https://www.sugarbush.com'},
    { i: 32, n: 'Snowshoe', s: 'WV', z: 2, l: 'https://www.snowshoemtn.com'},
    { i: 33, n: 'Lake Louise', s: 'AL', z: 3, l: 'https://www.skibig3.com/lake-louise-ski-resort/'},
    { i: 34, n: 'Mt Norquay', s: 'AL', z: 3, l: 'https://www.skibig3.com/mt-norquay-ski-resort/'},
    { i: 35, n: 'Sunshine Village', s: 'AL', z: 3, l: 'https://www.skibig3.com/sunshine-village-ski-resort/'},
    { i: 36, n: 'Cypress Mountain', s: 'BC', z: 3, l: 'https://www.cypressmountain.com'},
    { i: 37, n: 'Revelstoke', s: 'BC', z: 3, l: 'http://www.revelstokemountainresort.com'},
    { i: 38, n: 'Blue Mountain', s: 'ON', z: 3, l: 'https://www.bluemountain.ca'},
    { i: 39, n: 'Mont Tremblant', s: 'QE', z: 3, l: 'https://www.tremblant.ca'},
  ];

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reports = this.reportService.getAvailableReports();

    this.combined = this.reports.map((x) => {
      x = {...this.areas[x.i], ...this.reports[x.i]};
      return x;
    });
    console.log(JSON.stringify(this.combined));
    this.zoneWest = this.combined.filter(function (e) { return e.z === 0; });
    this.zoneRockies = this.combined.filter(function (e) { return e.z === 1; });
    this.zoneEast = this.combined.filter(function (e) { return e.z === 2; });
    this.zoneCanada = this.combined.filter(function (e) { return e.z === 3; });
  }

  get filterByZone() {
    return this.areas.filter(x => x.z === this.zone);
  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.zone = tabChangeEvent.index;
  }

}

