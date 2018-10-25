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
  zoneAll = [];

  areas: Area[] = [
    { i: 0, z: 0, n: 'Alpine Meadows', s: 'CA', l: 'https://squawalpine.com',
      ac: 2400, ve: 1802, an: 495, li: 13, ru: 100, pk: 8637, ba: 6835,
      nws: 'https://api.weather.gov/gridpoints/STO/100,84/forecast'},
    { i: 1, z: 0, n: 'Bear Mountain', s: 'CA', l: 'https://www.bigbearmountainresort.com',
      ac: 198, ve: 1665, an: 100, li: 12, ru: 32, pk: 8805, ba: 7140,
      nws: 'https://api.weather.gov/gridpoints/SGX/76,77/forecast'},
    { i: 2, z: 0, n: 'June Mountain', s: 'CA', l: 'https://www.junemountain.com',
      ac: 1500, ve: 2950, an: 250, li: 7, ru: 41, pk: 10090, ba: 7545,
      nws: 'https://api.weather.gov/gridpoints/REV/55,21/forecast'},
    { i: 3, z: 0, n: 'Mammoth', s: 'CA', l: 'https://www.mammothmountain.com',
      ac: 3500, ve: 3106, an: 400, li: 28, ru: 150, pk: 11059, ba: 7953,
      nws: 'https://api.weather.gov/gridpoints/REV/56,16/forecast'},
    { i: 4, z: 0, n: 'Snow Summit', s: 'CA', l: 'https://www.bigbearmountainresort.com',
      ac: 240, ve: 1209, an: 100, li: 12, ru: 31, pk: 8174, ba: 6965,
      nws: 'https://api.weather.gov/gridpoints/SGX/76,77/forecast'},
    { i: 5, z: 0, n: 'Squaw Valley', s: 'CA', l: 'https://squawalpine.com',
      ac: 4000, ve: 2850, an: 450, li: 30, ru: 177, pk: 9050, ba: 6200,
      nws: 'https://api.weather.gov/gridpoints/STO/99,86/forecast'},
    { i: 6, z: 0, n: 'Crystal Mountain', s: 'WA', l: 'https://www.crystalmountainresort.com',
      ac: 2600, ve: 3100, an: 350, li: 12, ru: 57, pk: 7012, ba: 3912,
      nws: 'https://api.weather.gov/gridpoints/SEW/144,31/forecast'},
    { i: 7, z: 0, n: 'The Summit', s: 'WA', l: 'http://www.summitatsnoqualmie.com',
      ac: 1994, ve: 2280, an: 428, li: 26, ru: 62, pk: 5420, ba: 2610,
      nws: 'https://api.weather.gov/gridpoints/SEW/150,54/forecast'},
    { i: 8, z: 1, n: 'Aspen Highlands', s: 'CO', l: 'https://www.aspensnowmass.com',
    ac: 1010, ve: 3638, an: 300, li: 5, ru: 118, pk: 11678, ba: 8040,
    nws: 'https://api.weather.gov/gridpoints/RIW/38,145/forecast'},
    { i: 9, z: 1, n: 'Aspen Mountain', s: 'CO', l: 'https://www.aspensnowmass.com',
    ac: 673, ve: 3267, an: 300, li: 8, ru: 76, pk: 11212, ba: 7945,
    nws: 'https://api.weather.gov/gridpoints/RIW/38,145/forecast'},
    { i: 10, z: 1, n: 'Buttermilk', s: 'CO', l: 'https://www.aspensnowmass.com',
    ac: 435, ve: 2030, an: 200, li: 8, ru: 44, pk: 9900, ba: 7870,
    nws: 'https://api.weather.gov/gridpoints/GJT/156,101/forecast'},
    { i: 11, z: 1, n: 'Copper Mountain', s: 'CO', l: 'https://www.coppercolorado.com',
    ac: 2465, ve: 2601, an: 310, li: 23, ru: 140, pk: 12313, ba: 9712,
    nws: 'https://api.weather.gov/gridpoints/BOU/20,52/forecast'},
    { i: 12, z: 1, n: 'Eldora', s: 'CO', l: 'https://www.eldora.com',
    ac: 680, ve: 1240, an: 300, li: 7, ru: 53, pk: 10600, ba: 9360,
    nws: 'https://api.weather.gov/gridpoints/BOU/41,71/forecast'},
    { i: 13, z: 1, n: 'Snowmass', s: 'CO', l: 'https://www.aspensnowmass.com',
    ac: 3132, ve: 4406, an: 300, li: 17, ru: 94, pk: 12510, ba: 8104,
    nws: 'https://api.weather.gov/gridpoints/GJT/153,99/forecast'},
    { i: 14, z: 1, n: 'Steamboat', s: 'CO', l: 'https://steamboat.com',
    ac: 2965, ve: 3668, an: 349, li: 23, ru: 165, pk: 10568, ba: 6900,
    nws: 'https://api.weather.gov/gridpoints/GJT/166,158/forecast'},
    { i: 15, z: 1, n: 'Winter Park Resort', s: 'CO', l: 'https://www.winterparkresort.com',
    ac: 3081, ve: 3060, an: 348, li: 25, ru: 143, pk: 12600, ba: 9000,
    nws: 'https://api.weather.gov/gridpoints/BOU/35,67/forecast'},
    { i: 16, z: 1, n: 'Big Sky Resort', s: 'MT', l: 'https://bigskyresort.com',
    ac: 5850, ve: 4350, an: 400, li: 36, ru: 250, pk: 11166, ba: 6800,
    nws: 'https://api.weather.gov/gridpoints/TFX/80,40/forecast'},
    { i: 17, z: 1, n: 'Taos', s: 'NM', l: 'https://www.taosskivalley.com',
    ac: 1294, ve: 3281, an: 300, li: 13, ru: 115, pk: 12481, ba: 9200,
    nws: 'https://api.weather.gov/gridpoints/ABQ/146,181/forecast'},
    { i: 18, z: 1, n: 'Alta', s: 'UT', l: 'https://www.alta.com',
    ac: 2200, ve: 2020, an: 514, li: 10, ru: 116, pk: 10550, ba: 8530,
    nws: 'https://api.weather.gov/gridpoints/SLC/107,164/forecast'},
    { i: 19, z: 1, n: 'Brighton', s: 'UT', l: 'http://www.brightonresort.com',
    ac: 1050, ve: 1745, an: 500, li: 6, ru: 66, pk: 10750, ba: 8755,
    nws: 'https://api.weather.gov/gridpoints/SLC/107,166/forecast'},
    { i: 20, z: 1, n: 'Deer Valley', s: 'UT', l: 'http://www.deervalley.com',
    ac: 2026, ve: 3000, an: 300, li: 24, ru: 101, pk: 9570, ba: 6570,
    nws: 'https://api.weather.gov/gridpoints/SLC/112,166/forecast'},
    { i: 21, z: 1, n: 'Snowbird', s: 'UT', l: 'https://www.snowbird.com',
    ac: 2500, ve: 3240, an: 500, li: 13, ru: 169, pk: 11000, ba: 7760,
    nws: 'https://api.weather.gov/gridpoints/SLC/107,164/forecast'},
    { i: 22, z: 1, n: 'Solitude', s: 'UT', l: 'https://solitudemountain.com',
    ac: 1200, ve: 2047, an: 500, li: 8, ru: 77, pk: 10035, ba: 7988,
    nws: 'https://api.weather.gov/gridpoints/SLC/107,166/forecast'},
    { i: 23, z: 1, n: 'Jackson Hole', s: 'WY', l: 'https://www.jacksonhole.com',
    ac: 2500, ve: 4139, an: 459, li: 16, ru: 116, pk: 10450, ba: 6311,
    nws: 'https://api.weather.gov/gridpoints/RIW/44,143/forecast'},
    { i: 24, z: 2, n: 'Sugarloaf', s: 'ME', l: 'https://www.sugarloaf.com',
    ac: 1230, ve: 2820, an: 200, li: 13, ru: 162, pk: 4237, ba: 1417,
    nws: ''},
    { i: 25, z: 2, n: 'Sunday River ', s: 'ME', l: 'https://www.sundayriver.com',
    ac: 870, ve: 2340, an: 167, li: 15, ru: 117, pk: 3140, ba: 800,
    nws: ''},
    { i: 26, z: 2, n: 'Boyne Highlands', s: 'MI', l: 'https://www.boynehighlands.com',
    ac: 435, ve: 552, an: 140, li: 8, ru: 55, pk: 1325, ba: 773,
    nws: ''},
    { i: 27, z: 2, n: 'Boyne Mountain', s: 'MI', l: 'https://www.boynemountain.com',
    ac: 435, ve: 500, an: 140, li: 12, ru: 60, pk: 1120, ba: 620,
    nws: ''},
    { i: 28, z: 2, n: 'Loon Mountain', s: 'NH', l: 'http://www.loonmtn.com',
    ac: 370, ve: 2100, an: 160, li: 11, ru: 61, pk: 3050, ba: 950,
    nws: ''},
    { i: 29, z: 2, n: 'Killington', s: 'VT', l: 'https://www.killington.com',
    ac: 1509, ve: 3050, an: 250, li: 21, ru: 155, pk: 4241, ba: 1165,
    nws: ''},
    { i: 30, z: 2, n: 'Straton', s: 'VT', l: 'https://www.stratton.com',
    ac: 670, ve: 2003, an: 180, li: 11, ru: 97, pk: 3875, ba: 1872,
    nws: ''},
    { i: 31, z: 2, n: 'Sugarbush', s: 'VT', l: 'https://www.sugarbush.com',
    ac: 4000, ve: 2600, an: 250, li: 16, ru: 111, pk: 4083, ba: 1483,
    nws: ''},
    { i: 32, z: 2, n: 'Snowshoe', s: 'WV', l: 'https://www.snowshoemtn.com',
    ac: 257, ve: 1500, an: 180, li: 13, ru: 41, pk: 4848, ba: 3348,
    nws: ''},
    { i: 33, z: 3, n: 'Lake Louise', s: 'AL', l: 'https://www.skibig3.com/lake-louise-ski-resort/',
    ac: 4200, ve: 3250, an: 179, li: 7, ru: 145, pk: 8650, ba: 5400,
    nws: ''},
    { i: 34, z: 3, n: 'Mt Norquay', s: 'AL', l: 'https://www.skibig3.com/mt-norquay-ski-resort/',
    ac: 190, ve: 1650, an: 120, li: 6, ru: 74, pk: 8054, ba: 5396,
    nws: ''},
    { i: 35, z: 3, n: 'Sunshine Village', s: 'AL', l: 'https://www.skibig3.com/sunshine-village-ski-resort/',
    ac: 3358, ve: 3514, an: 360, li: 12, ru: 137, pk: 8954, ba: 5440,
    nws: ''},
    { i: 36, z: 3, n: 'Cypress Mountain', s: 'BC', l: 'https://www.cypressmountain.com',
    ac: 600, ve: 2010, an: 425, li: 6, ru: 53, pk: 4724, ba: 2985,
    nws: ''},
    { i: 37, z: 3, n: 'Revelstoke', s: 'BC', l: 'http://www.revelstokemountainresort.com',
    ac: 3121, ve: 5620, an: 540, li: 4, ru: 40, pk: 7300, ba: 1680,
    nws: ''},
    { i: 38, z: 3, n: 'Blue Mountain', s: 'ON', l: 'https://www.bluemountain.ca',
    ac: 365, ve: 725, an: 110, li: 11, ru: 43, pk: 1480, ba: 755,
    nws: ''},
    { i: 39, z: 3, n: 'Mont Tremblant', s: 'QE', l: 'https://www.tremblant.ca',
    ac: 665, ve: 2116, an: 192, li: 14, ru: 96, pk: 2871, ba: 755,
    nws: ''}
  ];

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reports = this.reportService.getAvailableReports();

    this.combined = this.reports.map((x) => {
      x = {...this.areas[x.i], ...this.reports[x.i]};
      return x;
    });

    this.zoneWest = this.combined.filter(function (e) { return e.z === 0; });
    this.zoneRockies = this.combined.filter(function (e) { return e.z === 1; });
    this.zoneEast = this.combined.filter(function (e) { return e.z === 2; });
    this.zoneCanada = this.combined.filter(function (e) { return e.z === 3; });
    this.zoneAll = this.combined;
  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.zone = tabChangeEvent.index;
  }

}

