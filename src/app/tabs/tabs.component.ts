import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Area } from './../area.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {
  areas: Area[] = [
    { i:'0', n:'Alpine Meadows', s:'CA', z;'W', l:'https://squawalpine.com'},
    { i:'1', n:'Bear Mountain', s:'CA', z;'W', l:'https://www.bigbearmountainresort.com'},
    { i:'2', n:'June Mountain', s:'CA', z;'W', l:'https://www.junemountain.com'},
    { i:'3', n:'Mammoth', s:'CA', z;'W', l:'https://www.mammothmountain.com'},
    { i:'4', n:'Snow Summit', s:'CA', z;'W', l:'https://www.bigbearmountainresort.com'},
    { i:'5', n:'Squaw Valley', s:'CA', z;'W', l:'https://squawalpine.com'},
    { i:'6', n:'Crystal Mountain', s:'WA', z;'W', l:'https://www.crystalmountainresort.com'},
    { i:'7', n:'The Summit', s:'WA', z;'W', l:'http://www.summitatsnoqualmie.com'},
    { i:'8', n:'Aspen Highlands', s:'CO', z;'R', l:'https://www.aspensnowmass.com'},
    { i:'9', n:'Aspen Mountain', s:'CO', z;'R', l:'https://www.aspensnowmass.com'},
    { i:'10', n:'Buttermilk', s:'CO', z;'R', l:'https://www.aspensnowmass.com'},
    { i:'11', n:'Copper Mountain', s:'CO', z;'R', l:'https://www.coppercolorado.com'},
    { i:'12', n:'Eldora', s:'CO', z;'R', l:'https://www.eldora.com'},
    { i:'13', n:'Snowmass', s:'CO', z;'R', l:'https://www.aspensnowmass.com'},
    { i:'14', n:'Steamboat', s:'CO', z;'R', l:'https://steamboat.com'},
    { i:'15', n:'Winter Park Resort', s:'CO', z;'R', l:'https://www.winterparkresort.com'},
    { i:'16', n:'Big Sky Resort', s:'MT', z;'R', l:'https://bigskyresort.com'},
    { i:'17', n:'Taos', s:'NM', z;'R', l:'https://www.taosskivalley.com'},
    { i:'18', n:'Alta', s:'UT', z;'R', l:'https://www.alta.com'},
    { i:'19', n:'Brighton', s:'UT', z;'R', l:'http://www.brightonresort.com'},
    { i:'20', n:'Deer Valley', s:'UT', z;'R', l:'http://www.deervalley.com'},
    { i:'21', n:'Snowbird', s:'UT', z;'R', l:'https://www.snowbird.com'},
    { i:'22', n:'Solitude', s:'UT', z;'R', l:'https://solitudemountain.com'},
    { i:'23', n:'Jackson Hole', s:'WY', z;'R', l:'https://www.jacksonhole.com'},
    { i:'24', n:'Sugarloaf', s:'ME', z;'E', l:'https://www.sugarloaf.com'},
    { i:'25', n:'Sunday River ', s:'ME', z;'E', l:'https://www.sundayriver.com'},
    { i:'26', n:'Boyne Highlands', s:'MI', z;'E', l:'https://www.boynehighlands.com'},
    { i:'27', n:'Boyne Mountain', s:'MI', z;'E', l:'https://www.boynemountain.com'},
    { i:'28', n:'Loon Mountain', s:'NH', z;'E', l:'http://www.loonmtn.com'},
    { i:'29', n:'Killington', s:'VT', z;'E', l:'https://www.killington.com'},
    { i:'30', n:'Straton', s:'VT', z;'E', l:'https://www.stratton.com'},
    { i:'31', n:'Sugarbush', s:'VT', z;'E', l:'https://www.sugarbush.com'},
    { i:'32', n:'Snowshoe', s:'WV', z;'E', l:'https://www.snowshoemtn.com'},
    { i:'33', n:'Lake Louise', s:'AL', z;'C', l:'https://www.skibig3.com/lake-louise-ski-resort/'},
    { i:'34', n:'Mt Norquay', s:'AL', z;'C', l:'https://www.skibig3.com/mt-norquay-ski-resort/'},
    { i:'35', n:'Sunshine Village', s:'AL', z;'C', l:'https://www.skibig3.com/sunshine-village-ski-resort/'},
    { i:'36', n:'Cypress Mountain', s:'BC', z;'C', l:'https://www.cypressmountain.com'},
    { i:'37', n:'Revelstoke', s:'BC', z;'C', l:'http://www.revelstokemountainresort.com'},
    { i:'38', n:'Blue Mountain', s:'ON', z;'C', l:'https://www.bluemountain.ca'},
    { i:'39', n:'Mont Tremblant', s:'QE', z;'C', l:'https://www.tremblant.ca'},
  ]

  constructor() { }

  ngOnInit() {
  }
}

